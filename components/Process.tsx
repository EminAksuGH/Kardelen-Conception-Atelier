"use client";

import { motion } from "framer-motion";
import { Palette, Layers, Brush, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    n: "01",
    label: "Tasarım & İlham",
    title: "",
    text: "Sizi dinliyoruz. Renk paleti, motif dili ve kompozisyon birlikte şekilleniyor.",
    Icon: Palette
  },
  {
    n: "02",
    label: "Hazırlık & Patine",
    title: "",
    text: "Yüzey zımparası, astar ve zamansız bir doku için katmanlı patine uygulaması.",
    Icon: Layers
  },
  {
    n: "03",
    label: "Dekupaj & Detay",
    title: "",
    text: "Katman katman kâğıt uygulamaları, el işçiliği boya detayları ve yaldız dokunuşlar.",
    Icon: Brush
  },
  {
    n: "04",
    label: "Koruma & Teslim",
    title: "",
    text: "Vernik ile dayanıklılık, özel ambalaj ile teslim: bir hikâye, sahibini buluyor.",
    Icon: Sparkles
  }
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-16">
      <div className="container-custom relative">
        <SectionHeader
          eyebrow="Nasıl Çalışıyoruz"
          title={<>Her eserin arkasında</>}
          script="özenli bir yolculuk var."
        />

        <div className="relative mt-20">
          {/* Ornamental connecting line with gems */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[72px] hidden md:block"
          >
            <div className="relative mx-auto h-px w-[85%] bg-gradient-to-r from-transparent via-gold/60 to-transparent">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute -top-[4px] h-2 w-2 rotate-45 border border-gold/60 bg-ivory"
                  style={{ left: `${12.5 + i * 25}%` }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-14 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Numbered medallion */}
                  <div className="relative">
                    {/* Soft glow on hover */}
                    <div className="absolute inset-0 -m-3 rounded-full bg-gold/30 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                    {/* Outer dashed ring */}
                    <div className="relative grid h-36 w-36 place-items-center rounded-full">
                      <div className="absolute inset-0 rounded-full border border-dashed border-gold/40 transition-transform duration-[1200ms] ease-out group-hover:rotate-180" />

                      {/* Inner medallion */}
                      <div className="relative grid h-[108px] w-[108px] place-items-center rounded-full bg-gradient-to-br from-ivory via-cream to-parchment shadow-[0_12px_30px_-12px_rgba(84,56,114,0.35),inset_0_0_0_1px_rgba(201,168,106,0.6)]">
                        {/* Inner hairline */}
                        <div className="absolute inset-[6px] rounded-full border border-gold/25" />

                        {/* Tiny icon chip */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full border border-gold/50 bg-ivory px-2 py-1 shadow-soft">
                          <Icon
                            className="h-3.5 w-3.5 text-gold-dark"
                            strokeWidth={1.5}
                          />
                        </div>

                        {/* Number */}
                        <span className="mt-2 bg-gold-shimmer bg-clip-text font-display text-4xl font-light leading-none text-transparent animate-shimmer [background-size:200%_auto]">
                          {s.n}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Label + divider */}
                  <span className="mt-7 font-script text-4xl leading-none text-gold-dark">
                    {s.label}
                  </span>
                  <span className="mt-2 block h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />

                  {/* Title */}
                  <h4 className="mt-4 font-display text-xl text-ink md:text-[1.35rem]">
                    {s.title}
                  </h4>

                  {/* Description */}
                  <p className="prose-quiet mt-3 max-w-xs">{s.text}</p>

                  {/* Decorative bottom flourish */}
                  <svg
                    aria-hidden
                    viewBox="0 0 60 12"
                    className="mt-5 h-3 w-16 text-gold/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M0 6 Q15 0 30 6 T60 6" />
                    <circle cx="30" cy="6" r="1.5" fill="currentColor" />
                  </svg>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
