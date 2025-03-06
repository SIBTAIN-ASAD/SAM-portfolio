import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Ensure modern syntax including top-level await is supported
    minify: "esbuild", // Optional: Keep esbuild minifier, or set to false for debugging
  },
  esbuild: {
    supported: {
      "top-level-await": true, // Explicitly enable top-level await
    },
  },
});
