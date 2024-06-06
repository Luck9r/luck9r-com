import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    proxy: {
      '/.well-known/matrix': {
        target: 'https://matrix.luck9r.com',
        changeOrigin: true,
      }
    }
  },
})
