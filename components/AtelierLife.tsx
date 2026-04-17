"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const moments = [
  {
    src: "/gallery/kardelen-10.png",
    title: "Kardelen Ailesi",
    note: "Kırmızı önlüklerimiz, paylaştığımız anılar."
  },
  {
    src: "/gallery/kardelen-16.png",
    title: "Bir Eserin Doğuşu",
    note: "Atölyede biten her parça, sahibinin gülümsemesidir."
  },
  {
    src: "/gallery/kardelen-8.png",
    title: "Sanatın Dinginliği",
    note: "Küçük gruplar, büyük detaylar."
  }
];

export default function AtelierLife() {
  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Atölyeden Anlar"
          title={<>Burada üretilen sadece eserler değil,</>}
          script="aynı zamanda anılar."
          description="Kardelen Atölye; sanatın paylaşıldığı, kahkahaların ve çayların eşlik ettiği sıcak bir buluşma noktasıdır."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {moments.map((m, i) => (
            <motion.figure
              key={m.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[1.5rem] shadow-soft"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={m.src}
                  alt={m.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/80 via-lavender-900/15 to-transparent" />
                <div className="pointer-events-none absolute inset-3 rounded-2xl border border-gold-light/30" />
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <div className="flex items-center gap-2 font-sans text-[0.62rem] uppercase tracking-widest text-gold-light">
                  <Heart size={12} /> Atölyeden bir an
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight">
                  {m.title}
                </h3>
                <p className="mt-1 font-serif italic text-sm text-ivory/85">
                  {m.note}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <Quote className="text-gold" size={28} />
          <p className="mt-4 max-w-2xl font-display italic text-xl md:text-2xl text-ink leading-snug">
            “Atölyeye gelen herkes, bir öğrenci olarak değil; ailenin bir parçası
            olarak ayrılır.”
          </p>
          <span className="mt-4 font-sans text-[0.7rem] uppercase tracking-widest text-charcoal/60">
            — Uğur Kosova
          </span>
        </motion.div>
      </div>
    </section>
  );
}
