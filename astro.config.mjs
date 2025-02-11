// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://qdread-dev.github.io/",

  base: "/webmaster-2025",
  image: {
    service: passthroughImageService()
  },

  vite: {
    plugins: [tailwindcss()]
  }
});