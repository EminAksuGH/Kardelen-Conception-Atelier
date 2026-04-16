"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
  Send,
  Clock
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="iletisim" className="relative py-24 md:py-32">
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-[1.25rem] bg-lavender-sweep p-8 text-ivory shadow-vintage">
              <h3 className="font-display text-3xl">Bize ulaşın</h3>
              <p className="mt-3 font-serif text-ivory/85">
                Sorularınız, rezervasyon talepleriniz veya özel tasarım
                siparişleri için 24 saat içinde size dönüş yapıyoruz.
              </p>

              <ul className="mt-7 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-gold-light shrink-0" />
                  <a
                    href="https://maps.app.goo.gl/dYYQapvYQCDQ5gBv8"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold-light"
                  >
                    Kardelen Conception Atelier — Çankaya, Ankara
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-gold-light shrink-0" />
                  <a href="tel:+903124256160" className="hover:text-gold-light">
                    +90 312 425 61 60
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-gold-light shrink-0" />
                  <a
                    href="mailto:info@kardelenatolye.com"
                    className="hover:text-gold-light"
                  >
                    info@kardelenatolye.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 text-gold-light shrink-0" />
                  <div>
                    <div>Pazartesi – Cumartesi</div>
                    <div className="text-ivory/75">10:00 – 19:00</div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/atolyekardelen"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-4 py-2 text-xs uppercase tracking-widest transition hover:bg-ivory hover:text-lavender-900"
                >
                  <Instagram size={14} /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/kardelenconception"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-4 py-2 text-xs uppercase tracking-widest transition hover:bg-ivory hover:text-lavender-900"
                >
                  <Facebook size={14} /> Facebook
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-[1.25rem] border border-lavender-100 shadow-soft bg-ivory">
              <iframe
                title="Kardelen Conception Atelier — Harita"
                src="https://www.google.com/maps?q=Kardelen+Conception+Atelier&ll=39.8788733,32.8176602&z=17&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.app.goo.gl/dYYQapvYQCDQ5gBv8"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border-t border-lavender-100 bg-cream py-3 font-sans text-xs uppercase tracking-widest text-lavender-800 hover:bg-lavender-50"
              >
                <MapPin size={14} /> Google Haritalar ile aç
              </a>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
            }}
            className="lg:col-span-7 card-elegant p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Adınız Soyadınız">
                <input
                  required
                  type="text"
                  className="field"
                  placeholder="Nilüfer Demir"
                />
              </Field>
              <Field label="E-posta">
                <input
                  required
                  type="email"
                  className="field"
                  placeholder="siz@ornek.com"
                />
              </Field>
              <Field label="Telefon (opsiyonel)">
                <input type="tel" className="field" placeholder="+90 ..." />
              </Field>
              <Field label="İlgilendiğiniz Konu">
                <select className="field" defaultValue="">
                  <option value="" disabled>
                    Seçiniz...
                  </option>
                  <option>Atölye Rezervasyonu</option>
                  <option>Özel Sipariş</option>
                  <option>Kurumsal Etkinlik</option>
                  <option>Diğer</option>
                </select>
              </Field>
              <Field label="Mesajınız" className="md:col-span-2">
                <textarea
                  required
                  rows={5}
                  className="field resize-none"
                  placeholder="Kardelen'e ulaşmak istediğiniz detayı buraya yazın..."
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="font-sans text-xs text-charcoal/60 max-w-xs">
                Bize yazarak Kardelen Atölye’nin gizlilik politikasını kabul etmiş
                olursunuz.
              </p>
              <button type="submit" className="btn-primary">
                <Send size={14} /> Mesaj Gönder
              </button>
            </div>

            <style jsx>{`
              .field {
                width: 100%;
                border-radius: 0.9rem;
                border: 1px solid #ece3f5;
                background: #faf6ef;
                padding: 0.85rem 1rem;
                font-family: var(--font-inter);
                font-size: 0.95rem;
                color: #221a2e;
                outline: none;
                transition: border-color 0.2s, box-shadow 0.2s;
              }
              .field::placeholder {
                color: rgba(59, 47, 69, 0.45);
              }
              .field:focus {
                border-color: #855bae;
                box-shadow: 0 0 0 4px rgba(133, 91, 174, 0.12);
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
  className = ""
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-sans text-[0.68rem] uppercase tracking-widest text-charcoal/70">
        {label}
      </span>
      {children}
    </label>
  );
}
