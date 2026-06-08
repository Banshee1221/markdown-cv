import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const ROOT = process.cwd();
const STATIC_DIR = join(ROOT, 'static');
const SCAN_DIRS = ['src', 'static'];
const ASSET_EXTENSIONS = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.pdf', '.png', '.svg', '.webp']);
const STRING_RE = /(['"`])([^'"`]+?)\1/g;

function walk(dir) {
  const out = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist') continue;

    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(path));
    else out.push(path);
  }

  return out;
}

function candidateFrom(value) {
  if (value.includes('${')) return undefined;
  if (/^(https?:|mailto:|tel:|data:|#)/.test(value)) return undefined;

  const withoutFragment = value.split('#')[0].split('?')[0];
  const extension = extname(withoutFragment).toLowerCase();
  if (!ASSET_EXTENSIONS.has(extension)) return undefined;

  return withoutFragment.replace(/^\/+/, '');
}

const missing = [];

for (const dir of SCAN_DIRS.map((name) => join(ROOT, name)).filter(existsSync)) {
  for (const file of walk(dir)) {
    if (file.startsWith(STATIC_DIR)) continue;

    const text = readFileSync(file, 'utf8');
    for (const match of text.matchAll(STRING_RE)) {
      const candidate = candidateFrom(match[2]);
      if (!candidate) continue;

      const assetPath = join(STATIC_DIR, candidate);
      if (!existsSync(assetPath)) {
        missing.push(`${relative(ROOT, file)} references missing static asset: ${candidate}`);
      }
    }
  }
}

if (missing.length > 0) {
  console.error('Static asset check failed:');
  for (const line of missing) console.error(`- ${line}`);
  process.exit(1);
}

console.log('Static asset check passed.');
