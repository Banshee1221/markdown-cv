# markdown-cv

This repository contains Eugene de Beste's CV as a static Astro site, published from the `gh-pages` branch to GitHub Pages.

## Local Development

- `make install` installs dependencies.
- `make build` creates a production build in `dist/`.
- `make serve` starts the local dev server at `http://localhost:4000/`.
- `make clean` removes generated site artifacts.

## Editing

The site is built from structured content and reusable Astro components:

- `src/data/cv.ts` holds the CV content.
- `src/pages/index.astro` assembles the single-page CV.
- `src/components/` contains the shared layout components.
- `src/styles/global.css` contains the screen design system.

## Publishing

GitHub Pages deploys via GitHub Actions from the `gh-pages` branch.

## Notes

- The site is static-first and uses Astro with Tailwind CSS 4.
- Public assets are served from `static/`.
