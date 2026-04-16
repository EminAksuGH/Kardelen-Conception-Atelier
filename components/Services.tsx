"use client";

import { motion } from "framer-motion";
import {
  BookHeart,
  Gift,
  Hammer,
  Home,
  PaintBucket,
  Sparkle
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: BookHeart,
    title: "Dekupaj Defterler",
    desc: "Antika görünümlü, kapaklarına özenle dekupaj uygulanmış hatıra defterleri ve kutu defterler.",
    tag: "Signature"
  },
  {
    icon: PaintBucket,
    title: "Dekoratif Kutular",
    desc: "Takı, anı veya hediye için; iç ve dış yüzeyleri birlikte kompozisyonla tasarlanan sanat kutuları."
  },
  {
    icon: Home,
    title: "Ev Dekorasyonu",
    desc: "Duvar panoları, tepsi, şamdan ve objeler ile evinize zarif bir nostalji taşıyın."
  },
  {
    icon: Gift,
    title: "Özel Hediyelik",
    desc: "Doğum günü, nişan, düğün ve kurumsal etkinlikler için size özel tasarımlar."
  },
  {
    icon: Hammer,
    title: "Restorasyon & Dönüşüm",
    desc: "Eski mobilya ve aksesuarlarınıza yeni bir ruh: boyama, patine ve dekupaj ile yeniden doğuş."
  },
  {
    icon: Sparkle,
    title: "Butik Koleksiyon",
    desc: "Sınırlı sayıda üretilen, numaralandırılmış el yapımı özel koleksiyon parçaları."
  }
];

export default function Services() {
  return (
    <section id="koleksiyon" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Ne Yapıyoruz"
          title={<>Her obje, özenle tasarlanmış</>}
          script="bir eser gibidir."
          description="Koleksiyonumuz dekupaj tabanlı el yapımı dekoratif ürünlerden, özel siparişlere kadar geniş bir spektrumda şekillenir."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-[1.25rem] border border-lavender-100 bg-ivory/80 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-vintage"
            >
              {/* Decorative gradient corner */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lavender-100 opacity-0 transition group-hover:opacity-70 blur-2xl" />

              {s.tag && (
                <span className="absolute right-5 top-5 rounded-full border border-gold/50 bg-cream px-3 py-1 font-sans text-[0.6rem] uppercase tracking-widest text-gold-dark">
                  {s.tag}
                </span>
              )}

              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-lavender-700 to-lavender-900 text-ivory shadow-soft">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 prose-quiet">{s.desc}</p>

                <div className="mt-6 flex items-center gap-3 text-lavender-700">
                  <span className="h-px w-8 bg-lavender-300 transition group-hover:w-14 group-hover:bg-lavender-700" />
                  <span className="font-sans text-xs uppercase tracking-widest">
                    Detaylar
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
