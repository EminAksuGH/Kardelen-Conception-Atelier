"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Tasarım & İlham",
    text: "Sizi dinliyoruz. Renk paleti, motif dili ve kompozisyon birlikte şekilleniyor."
  },
  {
    n: "02",
    title: "Hazırlık & Patine",
    text: "Yüzey zımparası, astar ve zamansız bir doku için katmanlı patine uygulaması."
  },
  {
    n: "03",
    title: "Dekupaj & Detay",
    text: "Katman katman kâğıt uygulamaları, el işçiliği boya detayları ve yaldız dokunuşlar."
  },
  {
    n: "04",
    title: "Koruma & Teslim",
    text: "Vernik ile dayanıklılık, özel ambalaj ile teslim: bir hikâye, sahibini buluyor."
  }
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Nasıl Çalışıyoruz"
          title={<>Her eserin arkasında</>}
          script="özenli bir yolculuk var."
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-ivory shadow-soft">
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-lavender-200" />
                  <span className="font-display text-2xl text-lavender-800">
                    {s.n}
                  </span>
                </div>
                <h4 className="mt-6 font-display text-xl text-ink">
                  {s.title}
                </h4>
                <p className="mt-3 prose-quiet">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
