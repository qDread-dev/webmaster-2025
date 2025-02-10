// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://qdread-dev.github.io/",
  base: "https://github.com/qdread-dev/webmaster-2025",

  vite: {
    plugins: [tailwindcss()]
  }
});