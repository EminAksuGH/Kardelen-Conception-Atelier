"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  script,
  description,
  align = "center"
}: {
  eyebrow?: string;
  title: React.ReactNode;
  script?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-gold" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-8 bg-gold" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading-section max-w-3xl"
      >
        {title}
        {script && (
          <>
            <br />
            <span className="font-script text-gold-dark text-[1.3em] leading-[0.9]">
              {script}
            </span>
          </>
        )}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="prose-quiet max-w-2xl"
        >
          {description}
        </motion.p>
      )}
      <span className="divider-gold mt-2" />
    </div>
  );
}
