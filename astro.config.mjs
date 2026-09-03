import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://karsan1.github.io',
  base: '/roshini-website',
  output: 'static',
  integrations: [sitemap()],
});
