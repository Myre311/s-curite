import type { Config } from "tailwindcss";

/**
 * NOTE — Tailwind v4 lit sa configuration depuis `src/app/globals.css`
 * (directive `@theme`). Ce fichier reste fourni pour :
 *   - documenter et centraliser les tokens de marque ;
 *   - assurer la compatibilité avec l'outillage (IntelliSense, plugins).
 *
 * >>> COULEURS DE MARQUE — modifier ici ET dans globals.css (@theme) <<<
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0a0a0b",
          soft: "#111113",
          elevated: "#17171a",
        },
        or: {
          DEFAULT: "#c5a253",
          clair: "#e2c987",
          fonce: "#9c7d3a",
        },
        blanc: {
          DEFAULT: "#f5f3ee",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
