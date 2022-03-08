import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    open: true,
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
