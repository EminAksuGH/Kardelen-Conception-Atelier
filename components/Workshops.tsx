"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const workshops = [
  {
    title: "Başlangıç · Dekupaj Defteri",
    level: "Başlangıç",
    duration: "4 saat",
    capacity: "6 kişilik grup",
    price: "₺1.450",
    description:
      "Temel dekupaj teknikleriyle kendi antika defterinizi hazırlarsınız. Kâğıt seçimi, yapıştırma, patine ve verniklemeyi uçtan uca deneyimlersiniz.",
    includes: [
      "Tüm malzemeler",
      "Defter gövdesi",
      "El kitabı & ikram",
      "Eve götürülen eser"
    ],
    image: "/gallery/kardelen-8.png"
  },
  {
    title: "Orta Seviye · Sanat Kutusu",
    level: "Orta",
    duration: "6 saat",
    capacity: "6 kişilik grup",
    price: "₺1.950",
    description:
      "İç ve dış kompozisyonu birlikte tasarladığımız sanat kutularında; katmanlı dekupaj, yaldız ve patine teknikleri birlikte çalışılır.",
    includes: [
      "Premium kutu gövdesi",
      "El yapımı rozetler & menteşeler",
      "Fırça seti",
      "Sanat yönetmeni eşliğinde"
    ],
    image: "/gallery/kardelen-14.png"
  },
  {
    title: "İleri · Mobilya Dönüşümü",
    level: "İleri",
    duration: "2 gün",
    capacity: "4 kişilik butik",
    price: "₺4.200",
    description:
      "Küçük bir mobilyayı (sehpa, komodin) baştan sona yenilersiniz. Boyama, patine, dekupaj ve koruma teknikleriyle profesyonel bir dönüşüm.",
    includes: [
      "Özel mobilya parçası",
      "Profesyonel boyalar",
      "İki günlük eğitim",
      "Sertifika"
    ],
    image: "/gallery/kardelen-7.png"
  }
];

export default function Workshops() {
  return (
    <section id="atolye" className="relative py-24 md:py-32 bg-cream/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ivory to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ivory to-transparent" />

      <div className="container-custom">
        <SectionHeader
          eyebrow="Atölye Programları"
          title={<>Elleriniz öğrensin, ruhunuz</>}
          script="dinlensin."
          description="Küçük gruplarla, sanat yönetmeni eşliğinde; kahvenizi yudumlarken el emeğinin huzurunu yaşayacağınız butik atölyeler."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-lavender-100 bg-ivory shadow-soft transition hover:shadow-vintage"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                {/* Lavender tint + bottom gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/85 via-lavender-900/35 to-lavender-900/10" />
                <div className="absolute inset-0 bg-lavender-900/15 mix-blend-multiply" />

                <div className="relative flex h-full flex-col justify-between p-6 text-ivory">
                  <span className="self-start rounded-full border border-ivory/50 bg-lavender-900/30 backdrop-blur-sm px-3 py-1 font-sans text-[0.62rem] uppercase tracking-widest">
                    {w.level}
                  </span>
                  <div className="font-display text-3xl leading-tight drop-shadow-md">
                    {w.title.split(" · ")[1]}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-4 text-[0.72rem] uppercase tracking-widest text-charcoal/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {w.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={13} /> {w.capacity}
                  </span>
                </div>

                <p className="mt-4 prose-quiet">{w.description}</p>

                <ul className="mt-5 space-y-2">
                  {w.includes.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 font-sans text-sm text-charcoal/80"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-lavender-700"
                      />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 flex items-end justify-between">
                  <div>
                    <div className="font-sans text-[0.62rem] uppercase tracking-widest text-charcoal/60">
                      Kişi başı
                    </div>
                    <div className="font-display text-3xl text-ink">
                      {w.price}
                    </div>
                  </div>
                  <Link
                    href="/#iletisim"
                    className="inline-flex items-center gap-2 rounded-full border border-lavender-700/30 px-5 py-2.5 font-sans text-xs uppercase tracking-widest text-lavender-800 transition hover:bg-lavender-700 hover:text-ivory"
                  >
                    <CalendarDays size={14} /> Rezervasyon
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 rounded-2xl border border-dashed border-lavender-300 bg-lavender-50/60 p-6 text-center"
        >
          <p className="font-serif text-ink">
            Özel grup & kurumsal atölyeler, doğum günü ve bekarlığa veda etkinlikleri
            için{" "}
            <Link
              href="/#iletisim"
              className="text-lavender-700 underline decoration-gold/70 underline-offset-4"
            >
              bize yazın
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
