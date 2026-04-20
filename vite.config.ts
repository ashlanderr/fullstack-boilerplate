import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/client',
  },
  plugins: [react()],
  server: {
    proxy: {
      "/trpc": {
        target: "http://localhost:5000",
        changeOrigin: true,
        ws: true,
      },
    },
  },
})
