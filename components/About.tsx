"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flower2, Heart, Palette, ScrollText } from "lucide-react";
import SectionHeader from "./SectionHeader";

const pillars = [
  {
    icon: Palette,
    title: "Zanaatkar Detay",
    text: "Her eser, katman katman işlenen dekupaj tekniği ve incelikli fırça dokunuşlarıyla hayat bulur."
  },
  {
    icon: Flower2,
    title: "Doğadan İlham",
    text: "Güller, kır çiçekleri, nota ve antika motifler; klasik ile modern arasında zamansız bir armoni kurar."
  },
  {
    icon: Heart,
    title: "Kalpten Tasarım",
    text: "Her parça; sahibine özel hikâye ile tasarlanır. Kardelen’de üretim değil, özen vardır."
  },
  {
    icon: ScrollText,
    title: "Eğitim & Paylaşım",
    text: "Küçük gruplarla düzenlenen atölyelerimizde tekniği değil, el emeğinin kültürünü de aktarıyoruz."
  }
];

export default function About() {
  return (
    <section id="hakkimizda" className="relative py-24 md:py-32">
      <div className="container-custom grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <SectionHeader
            align="left"
            eyebrow="Hakkımızda"
            title={<>Bir atölye, bin hikâye, </>}
            script="sonsuz bir tutku."
          />

          <p className="prose-quiet mt-6">
            Kardelen Conception Atelier, klasik dekupaj sanatını çağdaş estetikle
            harmanlayan bir butik tasarım atölyesidir. Eski bir defterin
            kapağından, bir takı kutusunun iç yüzeyine; her parça, anlatacak
            küçük bir hikâye taşır.
          </p>
          <p className="prose-quiet mt-4">
            Kurucumuzun yıllara yayılan deneyimiyle şekillenen stüdyoda;
            tasarım, sabır ve zarafet bir araya gelir. Kardelen çiçeğinin
            naifliği gibi, üretimlerimiz de hem dayanıklı hem narin bir ruh
            taşır.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/60 ring-offset-4 ring-offset-ivory shadow-soft">
              <Image
                src="/gallery/kardelen-5.png"
                alt="Uğur Kosova — Atölye Kurucusu, Eğitmen"
                fill
                sizes="100px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="font-script text-3xl leading-none text-gold-dark">
                Uğur Kosova
              </div>
              <div className="mt-1 font-sans text-[0.68rem] uppercase tracking-widest2 text-charcoal/60">
                Atölye Kurucusu · Eğitmen
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="group card-elegant p-7 hover:shadow-vintage transition"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-lavender-100 text-lavender-700 group-hover:bg-lavender-700 group-hover:text-ivory transition">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 prose-quiet">{p.text}</p>
                <span className="mt-6 block h-px w-8 bg-gold/70" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 rounded-[1.25rem] border border-gold/30 bg-cream/60 p-8 md:p-10 shadow-inset"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="font-script text-6xl leading-none text-gold-dark md:text-7xl">
                “
              </div>
              <p className="font-display italic text-xl md:text-2xl text-ink leading-snug">
                Kardelen’de sadece bir obje tasarlamıyoruz; anıları, dokuyu ve
                anlamı bir araya getirerek{" "}
                <span className="text-lavender-700">
                  zamansız bir zarafet
                </span>{" "}
                yaratıyoruz.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
