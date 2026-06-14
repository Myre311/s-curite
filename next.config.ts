import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aucune image distante pour l'instant (placeholders CSS / SVG locaux).
  // Le client ajoutera ses photos ; configurer `images.remotePatterns` si besoin.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
