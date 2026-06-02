import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // host: true -> escucha en 0.0.0.0 para ser accesible desde fuera del contenedor.
    host: true,
    // No abrir navegador automáticamente (irrelevante/error dentro de Docker).
    open: false,
    watch: {
      // Polling necesario para que el hot-reload detecte cambios vía volúmenes
      // montados (Docker en Windows/macOS).
      usePolling: true,
      interval: 200,
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
