import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 Tells Vite to resolve from root (important for Vercel)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // your custom optimization rule
  },
});
