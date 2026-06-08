import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eugene.debeste.co.za',
  output: 'static',
  publicDir: './static',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, '');
        return !pathname.endsWith('/ats');
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
