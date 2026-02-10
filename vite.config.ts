import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // We strictly define a JSON object to prevent the browser from choking 
    // on unescaped server variables from the global process.env
    'process.env': JSON.stringify({
      API_KEY: process.env.API_KEY || ''
    })
  }
});