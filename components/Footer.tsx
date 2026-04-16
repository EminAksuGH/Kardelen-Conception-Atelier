import Link from "next/link";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-lavender-900 text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-gold blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-lavender-300 blur-3xl" />
      </div>

      <div className="container-custom relative grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12 text-gold-light" />
            <div>
              <div className="font-display text-2xl tracking-wide">Kardelen</div>
              <div className="font-sans text-[0.62rem] uppercase tracking-widest2 text-gold-light">
                Conception · Atelier
              </div>
            </div>
          </div>
          <p className="mt-6 font-serif text-sm leading-relaxed text-ivory/70">
            El emeği, estetik ve zarafeti bir araya getiren butik bir sanat
            atölyesi. Her parça, sabır ve tutkuyla tasarlanır.
          </p>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-light">Keşfet</h4>
          <ul className="mt-5 space-y-2.5 font-serif">
            <li>
              <Link href="/#hakkimizda" className="hover:text-gold-light">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/#atolye" className="hover:text-gold-light">
                Atölyeler
              </Link>
            </li>
            <li>
              <Link href="/#koleksiyon" className="hover:text-gold-light">
                Koleksiyon
              </Link>
            </li>
            <li>
              <Link href="/#galeri" className="hover:text-gold-light">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/#iletisim" className="hover:text-gold-light">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-light">İletişim</h4>
          <ul className="mt-5 space-y-3 font-sans text-sm text-ivory/80">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-gold-light" />
              <a
                href="https://maps.app.goo.gl/dYYQapvYQCDQ5gBv8"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-light"
              >
                Kardelen Conception Atelier — Çankaya, Ankara
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold-light" />
              <a href="tel:+903124256160" className="hover:text-gold-light">
                +90 312 425 61 60
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold-light" />
              <a
                href="mailto:info@kardelenatolye.com"
                className="hover:text-gold-light"
              >
                info@kardelenatolye.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-light">Bizi Takip Edin</h4>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/atolyekardelen"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-light/40 text-gold-light transition hover:bg-gold-light hover:text-lavender-900"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/kardelenconception"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-light/40 text-gold-light transition hover:bg-gold-light hover:text-lavender-900"
            >
              <Facebook size={16} />
            </a>
          </div>
          <p className="mt-6 font-script text-3xl text-gold-light">
            El emeğiyle, kalpten...
          </p>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/60 md:flex-row">
          <span>
            © {new Date().getFullYear()} Kardelen Conception Atelier. Tüm
            hakları saklıdır.
          </span>
          <span className="font-sans tracking-widest uppercase">
            Tasarım ve zarafetle · Handmade ın Türkiye
          </span>
        </div>
      </div>
    </footer>
  );
}
