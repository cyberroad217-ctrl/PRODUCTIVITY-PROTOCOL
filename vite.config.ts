import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Safely polyfills process.env so the AI SDK doesn't crash the browser
    'process.env': process.env
  }
});