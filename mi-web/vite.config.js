import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react/',
  plugins: [react()],
  server: {
    
    port: 5500, // 👈 acá definís el puerto
  },
});