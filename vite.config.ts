import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const OPTIONS = {
  test: /\.(jpe?g|png)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: false, // Disable in production
  ansiColors: false, // Disable in production

  png: {
    quality: 85, // Balanced quality for PNG
  },
  jpeg: {
    quality: 85, // Balanced quality for JPEG
  },
  jpg: {
    quality: 80, // Balanced quality for JPG
  },
  tiff: {
    quality: 85, // Slightly reduced for TIFF
  },

  webp: {
    lossless: false, // Use lossy WebP for better compression
    quality: 85, // Adjust quality for WebP
  },

  cache: true, // Enable caching
  cacheLocation: "./node_modules/.cache/vite-plugin-image-optimizer", // Cache location
};
export default defineConfig({
  publicDir: "public",
  plugins: [react(), ViteImageOptimizer(OPTIONS)],
});
