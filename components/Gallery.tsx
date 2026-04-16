"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const items = [
  {
    src: "/gallery/kardelen-1.png",
    title: "Lila Hatıra Defteri",
    tag: "Signature · Defter"
  },
  {
    src: "/gallery/kardelen-4.png",
    title: "Zaman & Güller Kutu İçi",
    tag: "Koleksiyon · Kutu"
  },
  {
    src: "/gallery/kardelen-2.png",
    title: "Nostalji Duvar Kompozisyonu",
    tag: "Ev Dekoru"
  },
  {
    src: "/gallery/kardelen-3.png",
    title: "Nostaljik Figürler · Çay Saati",
    tag: "Dekoratif Obje"
  }
];

type MoreItem = {
  src: string;
  title: string;
  tag: string;
  /** "square" → portre/kare; "wide" → yatay (landscape) */
  shape: "square" | "wide";
};

const more: MoreItem[] = [
  // Üst sıra · 3 kare/portre eser
  {
    src: "/gallery/kardelen-13.png",
    title: "Barok Altın Ayna",
    tag: "Restorasyon",
    shape: "square"
  },
  {
    src: "/gallery/kardelen-12.png",
    title: "Venedik Maskesi",
    tag: "Sanat Eseri",
    shape: "square"
  },
  {
    src: "/gallery/kardelen-9.png",
    title: "Sonbahar Tepsisi",
    tag: "Dekupaj",
    shape: "square"
  },
  // Alt sıra · 2 yatay (landscape) eser
  {
    src: "/gallery/kardelen-6.png",
    title: "Altın Kelebekler",
    tag: "Wall Art",
    shape: "wide"
  },
  {
    src: "/gallery/kardelen-15.png",
    title: "Altın Melek Figürleri",
    tag: "Koleksiyon",
    shape: "wide"
  }
];

export default function Gallery() {
  return (
    <section id="galeri" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Galeri"
          title={<>Kardelen’den</>}
          script="seçkin kareler."
          description="Atölyede doğan eserlerden, katılımcılarımızın ellerinde hayat bulan hatıralara kadar, Kardelen’in estetik dünyasından bir seçki."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          {/* Large feature (portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:col-span-6 md:row-span-2 overflow-hidden rounded-[1.5rem] shadow-vintage group"
          >
            <GalleryFrame
              src={items[0].src}
              title={items[0].title}
              tag={items[0].tag}
              aspect="aspect-[4/5] md:aspect-auto md:h-full"
              featured
            />
          </motion.div>

          {/* Top right wide tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative md:col-span-6 overflow-hidden rounded-[1.5rem] shadow-soft group"
          >
            <GalleryFrame
              src={items[1].src}
              title={items[1].title}
              tag={items[1].tag}
              aspect="aspect-[4/3] md:aspect-[16/10]"
            />
          </motion.div>

          {/* Bottom right - equal tiles for portrait photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative md:col-span-3 overflow-hidden rounded-[1.5rem] shadow-soft group"
          >
            <GalleryFrame
              src={items[2].src}
              title={items[2].title}
              tag={items[2].tag}
              aspect="aspect-[4/5]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:col-span-3 overflow-hidden rounded-[1.5rem] shadow-soft group"
          >
            <GalleryFrame
              src={items[3].src}
              title={items[3].title}
              tag={items[3].tag}
              aspect="aspect-[4/5]"
            />
          </motion.div>
        </div>

        {/* Daha fazla eser */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <span className="eyebrow">Daha Fazla Eser</span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink">
                Atölyeden seçkiler
              </h3>
            </div>
            <span className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>

          <div className="grid gap-5 grid-cols-2 md:grid-cols-6">
            {more.map((m, i) => {
              const isWide = m.shape === "wide";
              return (
                <motion.div
                  key={m.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                    isWide
                      ? "col-span-2 md:col-span-3"
                      : "col-span-1 md:col-span-2"
                  }`}
                >
                  <div
                    className={`relative ${
                      isWide ? "aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={m.src}
                      alt={m.title}
                      fill
                      sizes={
                        isWide
                          ? "(min-width: 768px) 50vw, 100vw"
                          : "(min-width: 768px) 33vw, 50vw"
                      }
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/85 via-lavender-900/10 to-transparent opacity-90 group-hover:opacity-100 transition" />
                    <div className="pointer-events-none absolute inset-2 rounded-xl border border-gold-light/30" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-ivory">
                    <span className="block font-sans text-[0.58rem] uppercase tracking-widest text-gold-light">
                      {m.tag}
                    </span>
                    <h4
                      className={`mt-1 font-display leading-tight ${
                        isWide ? "text-lg md:text-xl" : "text-base"
                      }`}
                    >
                      {m.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal/60">
          <span className="h-px w-8 bg-gold/70" />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/atolyekardelen"
            target="_blank"
            rel="noreferrer"
            className="text-lavender-700 underline decoration-gold/70 underline-offset-4"
          >
            @atolyekardelen
          </a>
          <span className="h-px w-8 bg-gold/70" />
        </div>
      </div>
    </section>
  );
}

function GalleryFrame({
  src,
  title,
  tag,
  aspect,
  featured = false
}: {
  src: string;
  title: string;
  tag: string;
  aspect: string;
  featured?: boolean;
}) {
  return (
    <div className={`relative w-full ${aspect}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 to-cream" />
      <Image
        src={src}
        alt={title}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/70 via-lavender-900/0 to-transparent" />

      {/* Gold frame */}
      <div className="pointer-events-none absolute inset-3 border border-gold-light/40 rounded-2xl" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="inline-block rounded-full border border-ivory/40 bg-ivory/15 px-3 py-1 font-sans text-[0.62rem] uppercase tracking-widest text-ivory backdrop-blur-sm">
          {tag}
        </span>
        <h3
          className={`mt-3 font-display text-ivory leading-tight ${
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
