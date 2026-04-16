# Kardelen Conception Atelier — Web Sitesi

El yapımı dekoratif sanat atölyesi **Kardelen Conception Atelier** için premium,
zarafet odaklı, Türkçe tek sayfa (landing) web sitesi.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons**.

## Özellikler

- Klasik + modern tasarım dili (dekupaj / vintage / lavanta-altın palet)
- Zarif tipografi: Cormorant Garamond · Playfair Display · Italianno · Inter
- Responsive bölümler: Hero · Hakkımızda · Hizmetler · Atölyeler · Süreç · Galeri · Yorumlar · CTA · İletişim
- Animasyonlu giriş efektleri (Framer Motion) + paralaks benzeri dekoratif katmanlar
- Yerleşik Google Haritalar + sosyal medya entegrasyonları
- Kendi el yapımı ürün fotoğrafları galeri bölümünde yer alır (`public/gallery/`)
- Erişilebilirlik gözeten semantik yapı, akıllı kontrast oranları

## Hızlı Başlangıç

Önkoşul: Node.js 18.17+ veya 20+.

```bash
# 1) Bağımlılıkları yükleyin
npm install

# 2) Geliştirme sunucusunu başlatın
npm run dev

# 3) Tarayıcıda açın
# http://localhost:3000
```

Üretim derlemesi:

```bash
npm run build
npm start
```

## Proje Yapısı

```
Kardelen/
├── app/
│   ├── layout.tsx        # Global fontlar, metadata, Navbar + Footer
│   ├── page.tsx          # Tek sayfa bileşen kompozisyonu
│   ├── globals.css       # Tema, tasarım sistemi ve utility sınıfları
│   └── icon.svg          # Sekme/favicon logosu
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Workshops.tsx
│   ├── Process.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   ├── Marquee.tsx
│   └── SectionHeader.tsx
├── public/gallery/       # Kardelen'in el yapımı ürün fotoğrafları
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Tasarım Sistemi

| Renk         | Kod       | Kullanım                             |
| ------------ | --------- | ------------------------------------ |
| Ivory        | `#FAF6EF` | Arka plan (ana yüzey)                |
| Krem         | `#F3ECDD` | İkincil yüzeyler                     |
| Lavanta 700  | `#543872` | Ana marka rengi                      |
| Lavanta 900  | `#2A1B3B` | Koyu vurgu / footer                  |
| Gold         | `#C9A86A` | Altın detaylar, çerçeveler, vurgular |
| Gold Light   | `#E4CF9F` | Yardımcı altın / metin vurgusu       |
| Ink          | `#221A2E` | Ana metin rengi                      |

Tipografi:

- **Display / başlıklar** — Cormorant Garamond (klasik serif)
- **İkincil başlıklar** — Playfair Display
- **Altın vurgular** — Italianno (el yazısı)
- **Gövde metni** — Inter

## Özelleştirme Notları

- **Telefon / e-posta**: `components/Navbar.tsx`, `components/Footer.tsx` ve
  `components/Contact.tsx` dosyalarında `+90 000 000 00 00` ve
  `info@kardelenatolye.com` alanlarını güncelleyin.
- **Harita**: `components/Contact.tsx` içindeki `iframe` kaynağı, Google’ın
  paylaşılan `?q=` arama adresini kullanır. Kendi gömme bağlantınızı
  Google Haritalar → "Haritayı göm" adımından alıp yapıştırabilirsiniz. Aç
  butonu zaten doğru kısa adrese (`maps.app.goo.gl/D1xGPigoYuPehtRx9`)
  yönlendiriyor.
- **Sosyal medya**: URL’ler; `components/Navbar.tsx`, `components/Footer.tsx`,
  `components/Contact.tsx`, `components/Gallery.tsx` ve `components/CTA.tsx`
  içindedir. (Facebook: `kardelenconception`, Instagram: `atolyekardelen`).
- **Galeri fotoğrafları**: `public/gallery/kardelen-1..4.png`. Dilediğinizde
  bunları değiştirip `components/Gallery.tsx` içindeki `items` dizisinin
  başlık/etiketlerini düzenleyebilirsiniz.
- **Atölye fiyatları & kapasiteler**: `components/Workshops.tsx` içindeki
  `workshops` dizisinden kolayca düzenlenir.
- **Metin & içerikler**: Tüm metinler bileşenlerde Türkçe olarak tanımlıdır.

## Sonraki Adımlar (öneri)

1. Gerçek telefon/e-posta/adres bilgileri eklenmeli.
2. `next/image` için gerçek ürün fotoğrafları (daha yüksek çözünürlük) eklenip
   `components/Gallery.tsx` dizisine yeni kartlar eklenmeli.
3. Form gönderimi için bir servis (Formspree, Resend, kendi API route’u) bağlanabilir:
   `components/Contact.tsx` içindeki `onSubmit`.
4. Blog / Atölye takvimi sayfası eklenebilir (örn. `app/atolye/[slug]/page.tsx`).

İyi çalışmalar! ✿
