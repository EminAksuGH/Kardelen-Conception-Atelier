import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        cream: "#F3ECDD",
        parchment: "#EEE3CE",
        lavender: {
          50: "#F6F1FB",
          100: "#ECE3F5",
          200: "#D6C3E8",
          300: "#BCA0D7",
          400: "#A07DC3",
          500: "#855BAE",
          600: "#6B4690",
          700: "#543872",
          800: "#3E2955",
          900: "#2A1B3B"
        },
        gold: {
          light: "#E4CF9F",
          DEFAULT: "#C9A86A",
          dark: "#A0824A"
        },
        ink: "#221A2E",
        charcoal: "#3B2F45"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        serif: ["var(--font-playfair)", "serif"],
        script: ["var(--font-italianno)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "vintage-paper":
          "radial-gradient(circle at 20% 10%, rgba(201,168,106,0.08), transparent 50%), radial-gradient(circle at 80% 90%, rgba(133,91,174,0.10), transparent 55%), linear-gradient(180deg, #FAF6EF 0%, #F3ECDD 100%)",
        "lavender-sweep":
          "linear-gradient(135deg, #543872 0%, #855BAE 50%, #BCA0D7 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, #A0824A 0%, #E4CF9F 50%, #A0824A 100%)"
      },
      boxShadow: {
        soft: "0 20px 40px -20px rgba(84,56,114,0.25)",
        vintage: "0 30px 60px -30px rgba(34,26,46,0.35)",
        inset: "inset 0 0 40px rgba(201,168,106,0.15)"
      },
      letterSpacing: {
        widest2: "0.3em"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
