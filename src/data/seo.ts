import { site } from './site';

export const SEO = {
  robots: {
    index: 'index, follow, max-image-preview:large',
    noindex: 'noindex, follow'
  },
  twitterCard: 'summary_large_image'
} as const;

function normalizePath(path: string): string {
  const withSlash = path.startsWith('/') ? path : `/${path}`;

  if (withSlash === '/') return site.basePath;
  if (withSlash.startsWith(site.basePath)) return withSlash;

  return `${site.basePath.replace(/\/$/, '')}${withSlash}`;
}

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${site.url}${normalizePath(pathOrUrl)}`;
}

export function absoluteImage(pathOrUrl?: string): string {
  return absoluteUrl(pathOrUrl?.trim() || site.defaultOgImage);
}

export function pageTitle(title: string): string {
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}

