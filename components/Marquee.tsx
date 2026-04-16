"use client";

const words = [
  "Dekupaj",
  "El Emeği",
  "Butik Atölye",
  "Zarafet",
  "Hatıra Defterleri",
  "Patine",
  "Restorasyon",
  "Dekoratif Kutular",
  "Özel Sipariş"
];

export default function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="relative border-y border-lavender-100 bg-cream/60 py-6 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {items.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl md:text-3xl text-lavender-800/80 italic"
          >
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
