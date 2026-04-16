"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#koleksiyon", label: "Koleksiyon" },
  { href: "/#atolye", label: "Atölye" },
  { href: "/#galeri", label: "Galeri" },
  { href: "/#iletisim", label: "İletişim" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(84,56,114,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Kardelen Conception Atelier"
        >
          <Logo className="h-11 w-11 text-lavender-700 transition group-hover:text-lavender-800" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl md:text-[1.35rem] tracking-wide text-ink">
              Kardelen
            </span>
            <span className="font-sans text-[0.62rem] uppercase tracking-widest2 text-lavender-700">
              Conceptıon · Atelıer
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative font-sans text-[0.8rem] uppercase tracking-widest text-charcoal/80 transition hover:text-lavender-800"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/atolyekardelen"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-lavender-200 p-2 text-lavender-700 transition hover:bg-lavender-700 hover:text-ivory"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://www.facebook.com/kardelenconception"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-lavender-200 p-2 text-lavender-700 transition hover:bg-lavender-700 hover:text-ivory"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
          <Link href="/#iletisim" className="btn-primary !py-2.5 !px-5 !text-xs">
            Rezervasyon
          </Link>
        </div>

        <button
          className="lg:hidden rounded-full border border-lavender-200 p-2 text-lavender-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-lavender-100 bg-ivory/95 backdrop-blur transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="container-custom flex flex-col gap-4 py-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-serif text-lg text-ink hover:text-lavender-700"
            >
              {n.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/atolyekardelen"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-lavender-200 p-2 text-lavender-700"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/kardelenconception"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-lavender-200 p-2 text-lavender-700"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
