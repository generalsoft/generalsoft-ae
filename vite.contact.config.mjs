import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  build: {
    outDir: 'dist/js',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        'contact-form-en': fileURLToPath(new URL('./src/js/contact-form-en.js', import.meta.url)),
        'contact-form-ar': fileURLToPath(new URL('./src/js/contact-form-ar.js', import.meta.url)),
        'contact-form-de': fileURLToPath(new URL('./src/js/contact-form-de.js', import.meta.url)),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
