import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://api:3000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
  plugins: [react()],
})