import { profile, education, scholarlyImpact, skills, summary } from '../data/cv';
import { site } from '../data/site';
import { absoluteUrl } from '../data/seo';

function cleanHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanGraph(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(cleanGraph);
  if (node && typeof node === 'object') {
    return Object.fromEntries(
      Object.entries(node as Record<string, unknown>)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, cleanGraph(value)])
    );
  }
  return node;
}

export function personSchema() {
  const sameAs = profile.links
    .filter((link) => link.kind === 'linkedin' || link.kind === 'github' || link.kind === 'website')
    .map((link) => link.href)
    .filter((href): href is string => Boolean(href));

  const knowsAbout = skills.flatMap((group) =>
    group.items
      .split(',')
      .map((item) => item.replace(/\s*&\s*/g, ' and ').trim())
      .filter(Boolean)
  );

  return {
    '@type': 'Person',
    '@id': `${site.url}${site.basePath}#person`,
    name: profile.name,
    jobTitle: profile.title,
    description: cleanHtml(summary.join(' ')),
    url: absoluteUrl('/'),
    email: profile.links.find((link) => link.kind === 'email')?.value,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cape Town',
      addressCountry: 'ZA'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'NexGen Cloud'
    },
    alumniOf: education.map((entry) => ({
      '@type': 'CollegeOrUniversity',
      name: cleanHtml(entry.rail)
    })),
    award: scholarlyImpact.awards.map((award) => cleanHtml(award.html)),
    knowsAbout,
    sameAs
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}${site.basePath}#website`,
    name: site.title,
    url: absoluteUrl('/'),
    description: site.description,
    inLanguage: site.lang,
    about: { '@id': `${site.url}${site.basePath}#person` }
  };
}

export function jsonLdGraph(...nodes: object[]): string {
  const graph = nodes.map((node) => {
    const cleaned = cleanGraph(node) as Record<string, unknown>;
    delete cleaned['@context'];
    return cleaned;
  });

  return JSON.stringify(cleanGraph({ '@context': 'https://schema.org', '@graph': graph }));
}
