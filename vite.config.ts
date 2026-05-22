import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    sitemap({
      hostname: 'https://gabriel-montel.vercel.app/', // Remplace par ton URL si besoin
    }),
  ],
  build: {
    // On force Vite à utiliser esbuild à la place de lightningcss pour minifier le CSS
    cssMinify: 'esbuild' 
  }
})