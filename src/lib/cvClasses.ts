export const shellClass = [
  'page-shell mx-auto w-full max-w-[72rem] bg-white',
  'px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10',
  '[--cv-gap:1rem] md:[--cv-gap:1.1rem] lg:[--cv-gap:1.35rem]',
  '[--cv-rail:0rem] [--cv-meta:0rem]',
  'md:[--cv-rail:7.25rem] md:[--cv-meta:7.25rem]',
  'lg:[--cv-rail:8.25rem] lg:[--cv-meta:8.5rem]',
  'xl:[--cv-rail:8.75rem] xl:[--cv-meta:9rem]'
].join(' ');

export const grid3Class = [
  'grid grid-cols-1 gap-y-2 gap-x-[var(--cv-gap)]',
  'md:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)] md:items-start',
  'lg:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]'
].join(' ');

export const sectionClass = `cv-section ${grid3Class} mt-8 md:mt-10`;
export const inlineSectionClass = [
  'cv-inline grid grid-cols-1 gap-y-2 gap-x-[var(--cv-gap)] mt-8 md:mt-10',
  'md:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)]',
  'lg:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]'
].join(' ');
export const itemClass = `cv-item ${grid3Class} mt-3 md:col-[1/-1] md:mt-4`;

export const sectionHeadingClass = [
  'm-0 text-[0.98rem] font-semibold leading-[1.12] text-[var(--accent)]',
  'md:pr-2 md:text-right md:text-[1rem] lg:pr-3 lg:text-[1.02rem]'
].join(' ');

export const railTitleClass = [
  'm-0 text-[0.9rem] font-semibold leading-[1.08] text-slate-600',
  'md:pr-2 md:text-right md:text-[0.9rem] lg:pr-3 lg:text-[0.92rem]'
].join(' ');

export const experienceRailTitleClass = [
  'm-0 text-[0.95rem] font-semibold leading-[1.08] text-slate-700',
  'md:pr-2 md:text-right md:text-[0.94rem] lg:pr-3 lg:text-[0.96rem]'
].join(' ');

export const metaClass = [
  "font-['IBM_Plex_Mono',ui-monospace,monospace]",
  'text-[0.72rem] leading-[1.15] tracking-[0.015em] text-slate-400',
  'whitespace-normal md:pr-2 md:text-left lg:pr-3 lg:text-right lg:whitespace-nowrap'
].join(' ');

export const bodyTextClass = 'break-words text-[0.94rem] leading-6 text-slate-700';
export const leadTextClass = 'break-words text-[0.94rem] leading-[1.28] text-slate-800';
export const roleTitleClass = 'block break-words text-[0.9rem] font-semibold leading-[1.28] text-slate-900 md:text-[0.95rem] lg:text-[0.98rem]';
export const bulletListClass = 'm-0 list-disc space-y-1.5 pl-5 marker:text-[var(--accent)] marker:text-[0.7em]';
export const subBulletListClass = 'm-0 list-disc space-y-1.5 pl-5 text-slate-600 marker:text-[var(--accent)] marker:text-[0.7em]';
