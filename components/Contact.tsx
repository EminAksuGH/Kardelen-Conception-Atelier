"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
  Send,
  Clock,
  Navigation,
  ArrowUpRight,
  User,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  type LucideIcon
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts: string[] = [];
  if (digits.length > 0) parts.push(digits.slice(0, 3));
  if (digits.length > 3) parts.push(digits.slice(3, 6));
  if (digits.length > 6) parts.push(digits.slice(6, 10));
  return parts.join(" ");
}

export default function Contact() {
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });
  const [phone, setPhone] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submit.status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const phoneDigits = phone.replace(/\D/g, "");
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: phoneDigits ? `+90${phoneDigits}` : "",
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? "")
    };

    setSubmit({ status: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        throw new Error(
          json.error ?? "Mesajınız gönderilemedi. Lütfen tekrar deneyin."
        );
      }

      form.reset();
      setPhone("");
      setSubmit({ status: "success" });
    } catch (err) {
      setSubmit({
        status: "error",
        message:
          err instanceof Error
            ? err.message
            : "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin."
      });
    }
  }

  return (
    <section id="iletisim" className="relative py-24 md:py-16">
      <div className="container-custom">
        <SectionHeader
          eyebrow="İletişim"
          title={<>Atölyemizin kapıları</>}
          script="size her zaman açık."
          description="Rezervasyon, özel sipariş veya atölye bilgisi için aşağıdaki formu doldurabilir ya da doğrudan sosyal medyadan ulaşabilirsiniz."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-lavender-900 via-ink to-lavender-900 p-8 text-ivory shadow-vintage md:p-10">
              {/* Decorative ambient glows */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-lavender-500/25 blur-3xl"
              />

              {/* Ornamental inner frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-4 rounded-[1.15rem] border border-ivory/15"
              />
              {/* Gold corner accents */}
              {[
                "left-5 top-5 border-l border-t",
                "right-5 top-5 border-r border-t",
                "left-5 bottom-5 border-l border-b",
                "right-5 bottom-5 border-r border-b"
              ].map((pos) => (
                <span
                  key={pos}
                  aria-hidden
                  className={`pointer-events-none absolute h-5 w-5 border-gold-light/70 ${pos}`}
                />
              ))}

              <div className="relative">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold-light/70" />
                  <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-gold-light">
                    İletişim
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-4 font-display text-4xl leading-tight md:text-[2.6rem]">
                  Bize ulaşın
                  <span className="mt-1 block font-script text-[1.9rem] leading-none text-gold-light">
                    her zaman buradayız
                  </span>
                </h3>

                <span className="mt-5 block h-px w-20 bg-gradient-to-r from-gold-light/80 via-gold-light/40 to-transparent" />

                <p className="mt-5 font-serif text-[0.98rem] leading-relaxed text-ivory/85">
                  Sorularınız, rezervasyon talepleriniz veya özel tasarım
                  siparişleri için 24 saat içinde size dönüş yapıyoruz.
                </p>

                <ul className="mt-8 space-y-4 text-[0.92rem]">
                  <ContactItem Icon={MapPin}>
                    <a
                      href="https://maps.app.goo.gl/dYYQapvYQCDQ5gBv8"
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-gold-light"
                    >
                      Kardelen Conception Atelier
                      <span className="block text-ivory/70">
                        Çankaya, Ankara
                      </span>
                    </a>
                  </ContactItem>
                  <ContactItem Icon={Phone}>
                    <a
                      href="tel:+903124256160"
                      className="tracking-wide transition hover:text-gold-light"
                    >
                      +90 312 425 61 60
                    </a>
                  </ContactItem>
                  <ContactItem Icon={Mail}>
                    <a
                      href="mailto:info@kardelenatolye.com"
                      className="transition hover:text-gold-light"
                    >
                      info@kardelenatolye.com
                    </a>
                  </ContactItem>
                  <ContactItem Icon={Clock}>
                    <div>
                      <div>Pazartesi – Cumartesi</div>
                      <div className="text-ivory/70">10:00 – 19:00</div>
                    </div>
                  </ContactItem>
                </ul>

                {/* Divider */}
                <span className="mt-8 block h-px w-full bg-gradient-to-r from-transparent via-ivory/25 to-transparent" />

                {/* Social */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-end md:gap-3">
                  <SocialLink
                    href="https://www.instagram.com/atolyekardelen"
                    Icon={Instagram}
                    label="Instagram"
                  />
                  <SocialLink
                    href="https://www.facebook.com/kardelenconception"
                    Icon={Facebook}
                    label="Facebook"
                  />
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-lavender-100 bg-ivory shadow-soft">
              {/* Gold corner accents */}
              {[
                "left-3 top-3 border-l border-t",
                "right-3 top-3 border-r border-t",
                "left-3 bottom-3 border-l border-b",
                "right-3 bottom-3 border-r border-b"
              ].map((pos) => (
                <span
                  key={pos}
                  aria-hidden
                  className={`pointer-events-none absolute z-20 h-4 w-4 border-gold/70 ${pos}`}
                />
              ))}

              {/* Floating eyebrow label */}
              <div className="pointer-events-none absolute left-1/2 top-5 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold/50 bg-ivory/90 px-4 py-1.5 shadow-soft backdrop-blur-sm">
                <span className="h-px w-4 bg-gold" />
                <span className="font-sans text-[0.62rem] uppercase tracking-widest2 text-lavender-800">
                  Atölyemiz
                </span>
                <span className="h-px w-4 bg-gold" />
              </div>

              {/* Map frame */}
              <div className="relative">
                <iframe
                  title="Kardelen Conception Atelier — Harita"
                  src="https://www.google.com/maps?q=39.8788733,32.8176602&z=17&output=embed"
                  className="h-80 w-full grayscale-[15%] saturate-[0.9] transition duration-700 group-hover:grayscale-0 group-hover:saturate-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Edge vignette */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-t-[1.5rem] shadow-[inset_0_0_60px_rgba(34,26,46,0.18)]"
                />

                {/* Soft bottom mask to hide Google's default map controls
                    (Street View preview, fullscreen/compass, attribution strip) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-28 bg-gradient-to-t from-ivory via-ivory/85 to-transparent"
                />

                {/* Floating atelier card */}
                <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10 flex items-center gap-3 rounded-xl border border-lavender-100 bg-ivory/95 p-3 shadow-vintage backdrop-blur-sm md:inset-x-5 md:p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-lavender-900 via-ink to-lavender-900 text-gold-light shadow-soft">
                    <MapPin size={16} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 leading-tight">
                    <div className="font-display text-[1.05rem] text-ink truncate">
                      Kardelen Conception Atelier
                    </div>
                    <div className="font-sans text-[0.78rem] text-charcoal/70 truncate">
                      Çankaya, Ankara · 10:00 – 19:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="flex items-stretch border-t border-lavender-100 bg-gradient-to-r from-cream via-ivory to-cream">
                <a
                  href="https://maps.app.goo.gl/dYYQapvYQCDQ5gBv8"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 py-4 font-sans text-[0.64rem] uppercase tracking-widest text-lavender-800 transition hover:bg-lavender-50 hover:text-lavender-900 sm:gap-2 sm:px-3 sm:text-[0.7rem] sm:tracking-widest2"
                >
                  <MapPin size={14} strokeWidth={1.8} className="shrink-0" />
                  Haritada Aç
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.8}
                    className="hidden shrink-0 opacity-60 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100 sm:inline"
                  />
                </a>
                <span
                  aria-hidden
                  className="my-3 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Kardelen+Conception+Atelier+Çankaya+Ankara"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-2 py-4 font-sans text-[0.64rem] uppercase tracking-widest text-gold-dark transition hover:bg-gold/10 hover:text-gold-dark sm:gap-2 sm:px-3 sm:text-[0.7rem] sm:tracking-widest2"
                >
                  <Navigation size={13} strokeWidth={1.8} className="shrink-0" />
                  Yol Tarifi Al
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.8}
                    className="hidden shrink-0 opacity-60 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100 sm:inline"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 relative overflow-hidden rounded-[1.5rem] border border-lavender-100 bg-ivory/90 p-8 shadow-soft backdrop-blur-sm md:p-10"
          >
            {/* Ambient decorative glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-lavender-200/40 blur-3xl"
            />

            {/* Gold corner accents */}
            {[
              "left-5 top-5 border-l border-t",
              "right-5 top-5 border-r border-t",
              "left-5 bottom-5 border-l border-b",
              "right-5 bottom-5 border-r border-b"
            ].map((pos) => (
              <span
                key={pos}
                aria-hidden
                className={`pointer-events-none absolute h-5 w-5 border-gold/50 ${pos}`}
              />
            ))}

            <div className="relative">
              {/* Form header */}
              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="font-sans text-[0.68rem] uppercase tracking-widest2 text-lavender-600">
                    Bize Yazın
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-[2.2rem]">
                  Bir mesaj bırakın
                  <span className="mt-1 block font-script text-[1.75rem] leading-none text-gold-dark">
                    size özenle dönelim
                  </span>
                </h3>
                <span className="mt-4 block h-px w-20 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
              </div>

              {/* Honeypot — hidden from real users, bots will fill it */}
              <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {/* Fields */}
              <fieldset
                disabled={submit.status === "submitting"}
                className="grid gap-5 md:grid-cols-2"
              >
                <Field label="Adınız Soyadınız" Icon={User}>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="field field-with-icon"
                    placeholder="Nilüfer Demir"
                  />
                </Field>
                <Field label="E-posta" Icon={Mail}>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="field field-with-icon"
                    placeholder="siz@ornek.com"
                  />
                </Field>
                <Field label="Telefon (opsiyonel)" Icon={Phone}>
                  <span className="phone-prefix pointer-events-none absolute left-[2.6rem] top-0 select-none">
                    +90
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    maxLength={12}
                    className="field field-phone"
                    placeholder="555 555 5555"
                  />
                </Field>
                <Field label="İlgilendiğiniz Konu" Icon={Sparkles}>
                  <select
                    name="topic"
                    required
                    className="field field-with-icon appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seçiniz...
                    </option>
                    <option>Atölye Rezervasyonu</option>
                    <option>Özel Sipariş</option>
                    <option>Kurumsal Etkinlik</option>
                    <option>Diğer</option>
                  </select>
                </Field>
                <Field
                  label="Mesajınız"
                  Icon={MessageSquare}
                  className="md:col-span-2"
                >
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="field field-with-icon resize-none"
                    placeholder="Kardelen'e ulaşmak istediğiniz detayı buraya yazın..."
                  />
                </Field>
              </fieldset>

              {/* Status banners */}
              {submit.status === "success" && (
                <div
                  role="status"
                  className="mt-6 flex items-center gap-3 rounded-2xl border border-lavender-200 bg-lavender-50 px-4 py-3.5 text-lavender-900"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-lavender-700"
                  />
                  <p className="font-sans text-[0.88rem] leading-snug">
                    Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.
                  </p>
                </div>
              )}
              {submit.status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3.5 text-rose-900"
                >
                  <AlertCircle
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-rose-600"
                  />
                  <p className="font-sans text-[0.88rem] leading-snug">
                    {submit.message}
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="mt-8 border-t border-lavender-100/80 pt-6">
                <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-4">
                  <p className="flex min-w-0 flex-1 items-start gap-2 font-sans text-[0.78rem] leading-relaxed text-charcoal/65 sm:items-center">
                    <ShieldCheck
                      size={14}
                      strokeWidth={1.7}
                      className="mt-0.5 shrink-0 text-gold-dark sm:mt-0"
                    />
                    <span>
                      Mesaj göndererek{" "}
                      <span className="text-lavender-800">gizlilik politikasını</span>{" "}
                      kabul etmiş olursunuz.
                    </span>
                  </p>
                  <button
                    type="submit"
                    disabled={submit.status === "submitting"}
                    className="group relative inline-flex w-full shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-lavender-700 via-lavender-800 to-lavender-900 px-6 py-3.5 font-sans text-xs uppercase tracking-widest2 text-ivory shadow-[0_15px_35px_-15px_rgba(84,56,114,0.6)] transition hover:shadow-[0_20px_45px_-15px_rgba(84,56,114,0.8)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-[0_15px_35px_-15px_rgba(84,56,114,0.6)] sm:ml-auto sm:w-auto"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    {submit.status === "submitting" ? (
                      <>
                        <Loader2
                          size={14}
                          strokeWidth={2}
                          className="relative animate-spin"
                        />
                        <span className="relative">Gönderiliyor…</span>
                      </>
                    ) : (
                      <>
                        <Send
                          size={14}
                          strokeWidth={1.8}
                          className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                        <span className="relative">Mesaj Gönder</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <style jsx>{`
              .field {
                width: 100%;
                border-radius: 0.9rem;
                border: 1px solid #ece3f5;
                background: #faf6ef;
                padding: 0.95rem 1rem;
                font-family: var(--font-inter);
                font-size: 0.95rem;
                color: #221a2e;
                outline: none;
                transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
              }
              .field-with-icon {
                padding-left: 2.7rem;
              }
              .field-phone {
                padding-left: 5rem;
                letter-spacing: 0.02em;
              }
              .phone-prefix {
                font-family: var(--font-inter);
                font-size: 0.95rem;
                letter-spacing: 0.02em;
                color: rgba(34, 26, 46, 0.75);
                padding: 0.95rem 0;
                border-top: 1px solid transparent;
                border-bottom: 1px solid transparent;
                line-height: 1.5;
              }
              .field::placeholder {
                color: rgba(59, 47, 69, 0.45);
              }
              .field:hover {
                border-color: #d6c3e8;
              }
              .field:focus {
                border-color: #855bae;
                background: #ffffff;
                box-shadow: 0 0 0 4px rgba(133, 91, 174, 0.12),
                  0 8px 20px -12px rgba(84, 56, 114, 0.25);
              }
              select.field {
                background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23A0824A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
                background-repeat: no-repeat;
                background-position: right 1rem center;
                padding-right: 2.5rem;
              }
              textarea.field {
                padding-top: 0.85rem;
              }
            `}</style>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
  Icon
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  Icon?: LucideIcon;
}) {
  return (
    <label className={`group/field flex flex-col gap-2 ${className}`}>
      <span className="font-sans text-[0.68rem] uppercase tracking-widest text-charcoal/70">
        {label}
      </span>
      <div className="relative">
        {Icon && (
          <span className="pointer-events-none absolute left-3.5 top-[1.2rem] text-charcoal/45 transition group-focus-within/field:text-lavender-700">
            <Icon size={16} strokeWidth={1.6} />
          </span>
        )}
        {children}
      </div>
    </label>
  );
}

function ContactItem({
  Icon,
  children
}: {
  Icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <li className="group flex items-center gap-4">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-light/40 bg-ivory/10 shadow-[inset_0_0_0_1px_rgba(228,207,159,0.15)] transition group-hover:border-gold-light/80 group-hover:bg-ivory/20">
        <Icon size={16} className="text-gold-light" strokeWidth={1.5} />
      </span>
      <div className="leading-snug">{children}</div>
    </li>
  );
}

function SocialLink({
  href,
  Icon,
  label
}: {
  href: string;
  Icon: LucideIcon;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-full border border-gold-light/50 bg-ivory/5 px-4 py-2 font-sans text-[0.68rem] uppercase tracking-widest2 text-ivory/90 backdrop-blur-sm transition hover:border-gold-light hover:bg-ivory hover:text-lavender-900 hover:shadow-[0_10px_30px_-10px_rgba(228,207,159,0.6)]"
    >
      <Icon size={14} strokeWidth={1.7} />
      <span>{label}</span>
    </a>
  );
}
