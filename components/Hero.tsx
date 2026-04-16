"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-16">
      {/* Ambient decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 -left-24 h-[520px] w-[520px] rounded-full bg-lavender-200/40 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-[480px] w-[480px] rounded-full bg-gold-light/30 blur-3xl" />
      </div>

      {/* Ornamental corner frames */}
      <Ornament className="absolute left-8 top-28 hidden lg:block text-gold/40" />
      <Ornament
        flip
        className="absolute right-8 top-28 hidden lg:block text-gold/40"
      />

      <div className="container-custom relative grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
        {/* Text column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Conceptıon · Atelıer · Ankara</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-light leading-[1.02] text-ink text-5xl md:text-6xl lg:text-7xl"
          >
            El emeğinin{" "}
            <span className="relative inline-block">
              <span className="italic text-lavender-700">zarafetle</span>
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 4"
                  stroke="#C9A86A"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            buluştuğu <br />
            <span className="font-script text-gold-dark text-[1.2em] leading-none">
              sanat atölyesi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 max-w-xl prose-quiet"
          >
            Kardelen Conception Atelier; dekupaj, el yapımı dekoratif parçalar
            ve butik atölye deneyimleriyle yaşam alanlarınıza zamansız bir
            zarafet taşır. Her eser; sabırla, detaylarla ve kalpten tasarlanır.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/#atolye" className="btn-primary">
              <Sparkles size={16} />
              Atölyeyi Keşfet
            </Link>
            <Link href="/#koleksiyon" className="btn-ghost">
              Koleksiyonu Gör
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { k: "10+", v: "Yıllık Deneyim" },
              { k: "500+", v: "El Yapımı Eser" },
              { k: "50+", v: "Atölye Katılımcısı" }
            ].map((s) => (
              <div key={s.v} className="border-l border-lavender-200 pl-4">
                <div className="font-display text-3xl text-lavender-800">
                  {s.k}
                </div>
                <div className="font-sans text-[0.7rem] uppercase tracking-widest text-charcoal/60 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-[460px]">
            {/* Frame */}
            <div className="absolute -inset-6 rounded-[2rem] border border-gold/40" />
            <div className="absolute -inset-2 rounded-[1.6rem] border border-lavender-200" />

            <div className="relative overflow-hidden rounded-[1.4rem] shadow-vintage">
              <div className="relative aspect-[4/5] bg-lavender-sweep">
                <Image
                  src="/gallery/kardelen-11.png"
                  alt="Uğur Kosova — Kardelen Atölye'de el yapımı bir eserle"
                  fill
                  sizes="(min-width: 1024px) 460px, 80vw"
                  className="object-cover"
                  priority
                />

                {/* Subtle gradient for legibility of bottom caption */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-lavender-900/85 via-lavender-900/30 to-transparent" />

                {/* Bottom caption */}
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                  <div className="font-script text-5xl leading-none text-gold-light">
                    Kardelen
                  </div>
                  <div className="mt-1 font-sans text-[0.62rem] uppercase tracking-widest2 text-ivory/80">
                    Conceptıon · Atelıer
                  </div>
                  <div className="mt-3 h-px w-16 bg-gold-light/60" />
                  <div className="mt-3 font-display italic text-base text-ivory/90">
                    “Her detayda bir zarafet.”
                  </div>
                </div>

                {/* Corner flourish */}
                <svg
                  viewBox="0 0 120 120"
                  className="absolute -top-1 -left-1 h-24 w-24 text-gold-light/80"
                >
                  <path
                    d="M4 40 C 4 20, 20 4, 40 4"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="4" cy="4" r="3" fill="currentColor" />
                </svg>
                <svg
                  viewBox="0 0 120 120"
                  className="absolute -bottom-1 -right-1 h-24 w-24 text-gold-light/80"
                >
                  <path
                    d="M116 80 C 116 100, 100 116, 80 116"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="116" cy="116" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="container-custom mt-16 flex items-center justify-center gap-3 text-lavender-700/70">
        <ArrowDown size={14} className="animate-bounce" />
        <span className="font-sans text-[0.68rem] uppercase tracking-widest">
          Aşağı kaydır
        </span>
      </div>
    </section>
  );
}

function Ornament({
  className = "",
  flip = false
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`h-20 w-20 ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d="M10 10 C 30 10, 30 30, 50 30 C 30 30, 30 50, 10 50"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
      />
      <path
        d="M10 10 L 10 50"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
      />
      <circle cx="50" cy="30" r="2" fill="currentColor" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

