import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Reemplaza 'mi-web' por el nombre del repositorio en GitHub
export default defineConfig({
  base: '/react/',
  plugins: [react()],
});
