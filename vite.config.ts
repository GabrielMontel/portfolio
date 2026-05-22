import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import tailwindcss from '@tailwindcss/vite' // <-- ON IMPORTE LE PLUGIN ICI

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(), // <-- ON ACTIVE TAILWIND ICI
    sitemap({
      hostname: 'https://gabriel-montel.vercel.app/',
    }),
  ],
  build: {
    cssMinify: true
  }
})