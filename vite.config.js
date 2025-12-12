import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative paths so assets resolve correctly on GitHub Pages regardless of repo name/case
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server: {
    host: true
  }
})