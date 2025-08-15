import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mern_app_frontend/',
    build: {
    outDir: 'build'
  }
})
