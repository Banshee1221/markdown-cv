import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eugene.debeste.co.za',
  output: 'static',
  publicDir: './static',
  vite: {
    plugins: [tailwindcss()]
  }
});
