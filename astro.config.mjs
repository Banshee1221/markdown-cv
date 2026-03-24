import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://eugene.debeste.co.za',
  base: isProd ? '/markdown-cv' : '/',
  output: 'static',
  publicDir: './static',
  vite: {
    plugins: [tailwindcss()]
  }
});
