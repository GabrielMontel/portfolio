import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      // Remplace bien par TON URL personnalisée Vercel
      hostname: 'https://gabriel-montel.vercel.app/',
    }),
  ],
})