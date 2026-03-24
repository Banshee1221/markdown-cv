# markdown-cv

This repository contains Eugene de Beste's CV, rendered with Jekyll and published from the `gh-pages` branch on GitHub Pages.

## Local Development

Use the Docker-backed Makefile targets for reproducible local builds and previews.

- `make build` builds the site inside the pinned GitHub Pages Jekyll image.
- `make serve` starts a local preview at `http://localhost:4000/` and stops cleanly with `Ctrl+C`.
- `make clean` removes generated site artifacts.

The deployment and local preview configs stay separate:

- `_config.yml` is the published source of truth and keeps `baseurl: /markdown-cv` for GitHub Pages.
- `_config.local.yml` overrides `baseurl` to `""` only for local preview.

## Editing

Edit `index.md` to change the CV content.

The site layout and styling live in:

- `_layouts/cv.html`
- `media/davewhipp-screen.css`
- `media/davewhipp-print.css`

## Publishing

Push the `gh-pages` branch to GitHub. GitHub Pages will render the site under `/markdown-cv/`.

## Notes

- The local preview uses the same official GitHub Pages build image as the build target, pinned by digest.
- Browser favicon requests are satisfied locally by `favicon.ico`.
