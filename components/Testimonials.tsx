"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const quotes = [
  {
    name: "Elif A.",
    role: "Atölye Katılımcısı",
    text: "Atölyeye bir arkadaşımla geldim; bir terapi seansı gibiydi. Hem çok şey öğrendim hem de paha biçilmez bir eserle çıktım. Mekân, detaylar, atmosfer… her şey çok özeldi."
  },
  {
    name: "Emin A.",
    role: "Özel Sipariş",
    text: "Arkadaşıma hediye olarak özel bir kitap kutususu tasarlattım. Hem tasarım süreci hem de sonuç müthişti. Her kitabını okurken o günü hatırlatıyor."
  },
  {
    name: "Merve K.",
    role: "Kurumsal Etkinlik",
    text: "Kurumumuz için düzenlediğimiz bir etkinliğe özel atölye hazırladılar. Ekibimiz hâlâ o günden bahsediyor. Zarafet ve profesyonellik bir arada."
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-18">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Konuklarımız"
          title={<>Kardelen’den</>}
          script="güzel sözler."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative rounded-[1.25rem] border border-lavender-100 bg-ivory p-8 shadow-soft"
            >
              <div className="absolute -top-6 left-8 font-script text-7xl leading-none text-gold-dark select-none">
                “
              </div>
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 font-display italic text-lg text-ink leading-snug">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-lavender-sweep font-display text-ivory">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="font-serif text-ink">{q.name}</div>
                  <div className="font-sans text-[0.68rem] uppercase tracking-widest text-charcoal/60">
                    {q.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
