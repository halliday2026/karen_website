import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://halliday2026.github.io',
  base: '/karen_website',
  integrations: [tailwind()],
});
