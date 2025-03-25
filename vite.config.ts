import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { compression } from "vite-plugin-compression2";

const OPTIONS = {
  test: /\.(jpe?g|png)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: false,
  ansiColors: false,

  png: {
    quality: 100, // Balanced quality for PNG
  },
  jpeg: {
    quality: 100, // Balanced quality for JPEG
  },
  jpg: {
    quality: 100, // Balanced quality for JPG
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
  base: "/",
	server:	{
		port: 7000,
	},
  publicDir: "public",
  plugins: [
    react(),
    ViteImageOptimizer(OPTIONS),
    compression({
      algorithm: "brotliCompress",
      deleteOriginalAssets: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["framer-motion"],
          "router-vendor": ["react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
