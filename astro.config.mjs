import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  site: 'https://eugene.debeste.co.za',
  base: command === 'build' ? '/markdown-cv' : '/',
  output: 'static',
  publicDir: './static',
  vite: {
    plugins: [tailwindcss()]
  }
}));
