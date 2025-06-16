// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      lucide: ["*"]
    }
  }), sitemap()],
  site: "http://localhost:4321/"
});