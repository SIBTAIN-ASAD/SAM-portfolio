import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
});
