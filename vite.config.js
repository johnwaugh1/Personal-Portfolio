import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/johnwaugh1.github.io/',
  jsx: 'react-jsx',
  resolve: {
    alias: {
      '/favicon.ico': 'public/favicon.ico',
    },
  }  
});
