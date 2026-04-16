"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[1.75rem] bg-lavender-900 p-10 md:p-16 text-ivory shadow-vintage"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-gold blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full bg-lavender-300 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow !text-gold-light">Sizi bekliyoruz</span>
              <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Bir fincan kahvenin ve bir dekupaj eserinin{" "}
                <span className="font-script text-gold-light text-[1.2em] leading-none">
                  size eşlik ettiği gün
                </span>{" "}
                bizimle olun.
              </h3>
              <p className="mt-5 font-serif text-ivory/80 max-w-2xl">
                Küçük grup atölyelerimize, özel deneyimlere ve yeni koleksiyon
                lansmanlarına ilk siz haberdar olun.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/#iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-sans text-sm uppercase tracking-widest text-lavender-900 transition hover:bg-gold-light"
              >
                Atölye Rezervasyonu
              </Link>
              <Link
                href="https://www.instagram.com/atolyekardelen"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/50 px-7 py-4 font-sans text-sm uppercase tracking-widest text-ivory transition hover:bg-ivory hover:text-lavender-900"
              >
                Instagram’da Bizi Takip Et
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
