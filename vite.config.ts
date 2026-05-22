import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  // Cette ligne indique à Vite de chercher les fichiers CSS/JS à la racine du site
  base: '/', 
  plugins: [
    react(),
    sitemap({
      hostname: 'https://gabriel-montel.vercel.app/',
    }),
  ],
})