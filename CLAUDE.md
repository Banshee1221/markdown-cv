# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/resume website for Eugene de Beste, built with Astro 5 and Tailwind CSS 4. Produces a static single-page site deployed to GitHub Pages.

## Commands

```bash
make install          # Install npm dependencies
make serve            # Dev server at localhost:4000 (base: /)
make build            # Production build to dist/ (base: /markdown-cv/)
make clean            # Remove dist/ and .astro/ cache
npm run check         # TypeScript and Astro type checking
```

Dev server port is configurable: `make serve HOST_PORT=3000`

Production build uses `site: https://eugene.debeste.co.za` with base `/markdown-cv/` — local dev uses base `/`. This distinction matters for asset paths (see `astro.config.mjs`).

## Architecture

**Content/presentation separation**: All CV content lives in `src/data/cv.ts` as typed data structures. Components in `src/components/` are purely presentational. Editing CV content means editing `cv.ts`, not templates.

**Single-page composition**: `src/pages/index.astro` is the only page — it composes all section components into a responsive 3-column grid layout (rail | main | meta).

**Shared styling via class strings**: `src/lib/cvClasses.ts` exports TypeScript types for CV data and reusable Tailwind CSS class strings used across components for consistent styling.

**HTML-in-data pattern**: CV text fields can contain inline HTML (`<strong>`, `<em>`, `<a>`) rendered via Astro's `set:html` directive. Be careful not to break this when editing `cv.ts`.

**Asset paths**: Static files (logos, thesis PDF) live in `static/` and are referenced with path-aware URLs. The dev/prod base path difference has caused bugs — test both environments when changing asset references.

## Deployment

Push to `master` triggers GitHub Actions (`.github/workflows/deploy.yml`): npm ci → build → deploy to GitHub Pages. Node.js 22.
