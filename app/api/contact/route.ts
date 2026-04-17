import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin, type ContactMessageInsert } from "@/lib/supabase";

export const runtime = "nodejs";

const ALLOWED_TOPICS = [
  "Atölye Rezervasyonu",
  "Özel Sipariş",
  "Kurumsal Etkinlik",
  "Diğer"
] as const;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  topic?: unknown;
  message?: unknown;
  // Honeypot — bots fill it, humans don't see it.
  website?: unknown;
};

function sanitize(input: unknown, max = 2000): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek." },
      { status: 400 }
    );
  }

  // Spam honeypot — silently accept if filled, but don't save/send.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 30);
  const email = sanitize(body.email, 100);
  const phone = sanitize(body.phone, 14) || null;
  const topic = sanitize(body.topic, 50);
  const message = sanitize(body.message, 4000);

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Lütfen adınızı girin." },
      { status: 400 }
    );
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Lütfen geçerli bir e-posta adresi girin." },
      { status: 400 }
    );
  }
  if (!topic || !ALLOWED_TOPICS.includes(topic as (typeof ALLOWED_TOPICS)[number])) {
    return NextResponse.json(
      { error: "Lütfen bir konu seçin." },
      { status: 400 }
    );
  }
  if (!message || message.length < 5) {
    return NextResponse.json(
      { error: "Lütfen mesajınızı yazın." },
      { status: 400 }
    );
  }

  const payload: ContactMessageInsert = { name, email, phone, topic, message };

  // 1) Save to Supabase
  const { data: inserted, error: insertError } = await supabaseAdmin
    .from("contact_messages")
    .insert(payload)
    .select("id, created_at")
    .single();

  if (insertError) {
    console.error("[contact] Supabase insert failed:", insertError);
    return NextResponse.json(
      { error: "Mesajınız kaydedilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }

  // 2) Send email notification via Resend (best-effort — don't fail the
  //    request if email delivery fails, since the message is already stored)
  const resendApiKey = process.env.RESEND_API_KEY;
  const mailTo = process.env.CONTACT_EMAIL_TO;
  const mailFrom = process.env.CONTACT_EMAIL_FROM;

  if (resendApiKey && mailTo && mailFrom) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: mailFrom,
        to: mailTo,
        replyTo: email,
        subject: `[Kardelen Atölye] ${topic} — ${name}`,
        html: renderEmailHtml({ name, email, phone, topic, message })
      });
    } catch (mailError) {
      console.error("[contact] Resend send failed:", mailError);
    }
  }

  return NextResponse.json({
    ok: true,
    id: inserted.id,
    createdAt: inserted.created_at
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailHtml(m: ContactMessageInsert): string {
  const row = (label: string, value: string | null) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;color:#6B4690;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#221A2E;font-size:14px">${escapeHtml(value)}</td></tr>`
      : "";

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;background:#FAF6EF;padding:32px;border-radius:16px;border:1px solid #ECE3F5">
    <h2 style="margin:0 0 4px;font-family:Georgia,serif;font-weight:400;font-size:24px;color:#221A2E">Yeni bir mesaj geldi</h2>
    <p style="margin:0 0 24px;color:#6B4690;font-size:13px;letter-spacing:0.08em;text-transform:uppercase">Kardelen Conception Atelier</p>
    <table style="width:100%;border-collapse:collapse">
      ${row("Ad Soyad", m.name)}
      ${row("E-posta", m.email)}
      ${row("Telefon", m.phone)}
      ${row("Konu", m.topic)}
    </table>
    <div style="margin-top:20px;padding-top:20px;border-top:1px solid #ECE3F5">
      <div style="color:#6B4690;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Mesaj</div>
      <div style="white-space:pre-wrap;color:#221A2E;font-size:14px;line-height:1.6">${escapeHtml(m.message)}</div>
    </div>
  </div>`;
}
