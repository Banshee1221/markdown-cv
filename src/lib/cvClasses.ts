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
  'lg:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]',
  'print:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)] print:items-start'
].join(' ');

export const sectionClass = `cv-section ${grid3Class} mt-8 md:mt-10 print:mt-6`;
export const inlineSectionClass = [
  'cv-inline grid grid-cols-1 gap-y-2 gap-x-[var(--cv-gap)] mt-8 md:mt-10 print:mt-6',
  'md:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)]',
  'lg:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]',
  'print:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]'
].join(' ');
export const itemClass = `cv-item ${grid3Class} mt-3 md:col-[1/-1] md:mt-4 print:mt-2.5`;

export const sectionHeadingClass = [
  'm-0 text-[clamp(1rem,1.55vw,1.08rem)] font-semibold leading-[1.12] text-[var(--accent)]',
  'md:pr-2 md:text-right lg:pr-3',
  "after:content-[''] after:block after:mt-1.5 after:h-[2px] after:w-6 after:bg-[var(--accent)] after:opacity-60",
  'md:after:ml-auto'
].join(' ');

export const railTitleClass = [
  'm-0 text-[clamp(0.95rem,1.3vw,0.98rem)] font-semibold leading-[1.08] text-slate-600',
  'md:pr-2 md:text-right lg:pr-3'
].join(' ');

export const experienceRailTitleClass = [
  'm-0 text-[clamp(0.98rem,1.35vw,1.02rem)] font-semibold leading-[1.08] text-slate-700',
  'md:pr-2 md:text-right lg:pr-3'
].join(' ');

export const metaClass = [
  "font-['IBM_Plex_Mono',ui-monospace,monospace]",
  'text-[0.72rem] leading-[1.15] tracking-[0.015em] text-slate-400',
  'whitespace-normal md:text-left lg:pr-0 lg:text-right lg:whitespace-nowrap'
].join(' ');

export const bodyTextClass = 'break-words text-[0.94rem] leading-6 text-slate-700 print:text-[0.91rem] print:leading-[1.55]';
export const leadTextClass = 'break-words text-[0.94rem] leading-[1.28] text-slate-800 print:text-[0.91rem] print:leading-[1.5]';
export const roleTitleClass = 'block break-words text-[clamp(0.96rem,1.3vw,1rem)] font-semibold leading-[1.28] text-slate-900';
export const bulletListClass = 'm-0 list-disc space-y-2 print:space-y-1.5 pl-5 marker:text-[var(--accent)] marker:text-[0.7em]';
export const subBulletListClass = 'm-0 list-disc space-y-2 print:space-y-1.5 pl-5 text-slate-600 marker:text-[var(--accent)] marker:text-[0.7em]';
