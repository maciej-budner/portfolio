import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Indispensable pour GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages ne supporte pas l'optimisation d'image NextJS
  },
};

export default nextConfig;
