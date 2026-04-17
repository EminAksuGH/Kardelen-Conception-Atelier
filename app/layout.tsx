import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Italianno,
  Inter
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap"
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kardelen Conception Atelier — El Yapımı Sanat Atölyesi",
  description:
    "Kardelen Conception Atelier; dekupaj, el yapımı dekoratif ürünler ve butik sanat atölyeleri ile zarafeti evinize taşır. Ankara'da tasarım, atölye ve özel siparişler.",
  keywords: [
    "Kardelen Conception",
    "Atölye Kardelen",
    "dekupaj atölyesi",
    "el yapımı dekoratif",
    "handmade atelier",
    "Ankara atölye",
    "butik hediyelik",
    "sanat atölyesi"
  ],
  openGraph: {
    title: "Kardelen Conception Atelier",
    description:
      "El yapımı dekoratif ürünler ve butik sanat atölyeleri. Zarafet, detay ve el emeği.",
    type: "website",
    locale: "tr_TR"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF6EF"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${playfair.variable} ${italianno.variable} ${inter.variable}`}
    >
      <body className="bg-vintage-paper font-sans text-ink antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
