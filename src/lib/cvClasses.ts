export const shellClass = [
  'page-shell mx-auto w-full max-w-[72rem] bg-white',
  'px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10',
  '[--cv-gap:1rem] md:[--cv-gap:1.1rem] lg:[--cv-gap:1.35rem]',
  '[--cv-rail:0rem] [--cv-meta:0rem]',
  /* Rail and meta widened at md/lg/xl so long section heading labels like
     "Professional Experience" and "Scholarly Impact & Recognition" fit on
     one line in the rail. Tradeoff: ~32-44px less width in the main column. */
  'md:[--cv-rail:9rem] md:[--cv-meta:7.5rem]',
  'lg:[--cv-rail:10rem] lg:[--cv-meta:8.75rem]',
  'xl:[--cv-rail:10.5rem] xl:[--cv-meta:9.25rem]'
].join(' ');

export const grid3Class = [
  'grid grid-cols-1 gap-y-2 gap-x-[var(--cv-gap)]',
  'md:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)] md:items-start',
  'lg:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]',
  'print:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)] print:items-start'
].join(' ');

/* Inter-section spacing:
   - Mobile (< md): 14 (56px) — generous breathing room since there's no rail
     to give each section spatial weight
   - md+: 10 (40px) — tighter, the rail provides the visual separation
   - print: 6 (24px) — paper density */
export const sectionClass = `cv-section ${grid3Class} mt-14 md:mt-10 print:mt-6`;
export const inlineSectionClass = [
  'cv-inline grid grid-cols-1 gap-y-2 gap-x-[var(--cv-gap)] mt-14 md:mt-10 print:mt-6',
  'md:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)]',
  'lg:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]',
  'print:[grid-template-columns:var(--cv-rail)_minmax(0,1fr)_var(--cv-meta)]'
].join(' ');
export const itemClass = `cv-item ${grid3Class} mt-5 md:col-[1/-1] md:mt-4 print:mt-2.5`;

/* Section headings:
   - Mobile (< md): bold and oversized to create a strong section anchor in
     the absence of a rail column. Wider, more prominent accent rule below.
   - md+: smaller, right-aligned in the rail column with a subtle accent. */
export const sectionHeadingClass = [
  'm-0 font-bold leading-[1.15] text-[var(--accent)]',
  'text-[1.2rem] tracking-[0.005em]',
  'md:text-[clamp(0.95rem,1.45vw,1.02rem)] md:font-semibold md:tracking-normal md:leading-[1.18]',
  'md:pr-2 md:text-right lg:pr-3',
  /* When a long heading does need to wrap, balance the lines and never hyphenate */
  '[text-wrap:balance] [hyphens:none]',
  /* Accent rule under the heading: thicker and wider on mobile (anchors the section),
     compact and subtle at md+. */
  "after:content-[''] after:block after:mt-2.5 after:h-[2.5px] after:w-12 after:bg-[var(--accent)] after:opacity-80",
  'md:after:mt-1.5 md:after:h-[2px] md:after:w-6 md:after:opacity-60 md:after:ml-auto'
].join(' ');

/* Item subtitles (NexGen Cloud, CSIR / CHPC, etc) — unified ink-medium #314158
   across both project rails and experience rails for visual consistency.
   On mobile they're slightly larger and bolder so they read as item headers
   in the absence of a rail column. */
export const railTitleClass = [
  'm-0 text-[1rem] font-bold leading-[1.15] text-[var(--ink-medium)]',
  'md:text-[clamp(0.95rem,1.3vw,0.98rem)] md:font-semibold md:leading-[1.08]',
  'md:pr-2 md:text-right lg:pr-3'
].join(' ');

export const experienceRailTitleClass = [
  'm-0 text-[1.05rem] font-bold leading-[1.15] text-[var(--ink-medium)]',
  'md:text-[clamp(0.98rem,1.35vw,1.02rem)] md:font-semibold md:leading-[1.08]',
  'md:pr-2 md:text-right lg:pr-3'
].join(' ');

export const metaClass = [
  "font-['IBM_Plex_Mono',ui-monospace,monospace]",
  'text-[0.72rem] leading-[1.15] tracking-[0.015em] text-[var(--ink-mute)]',
  'whitespace-normal md:text-left lg:pr-0 lg:text-right lg:whitespace-nowrap'
].join(' ');

export const bodyTextClass = 'break-words text-[0.94rem] leading-6 text-[var(--ink-strong)] print:text-[0.91rem] print:leading-[1.55]';
export const leadTextClass = 'break-words text-[0.94rem] leading-[1.28] text-[var(--ink)] print:text-[0.91rem] print:leading-[1.5]';
export const roleTitleClass = 'block break-words text-[clamp(0.96rem,1.3vw,1rem)] font-semibold leading-[1.28] text-[var(--ink)]';
export const bulletListClass = 'm-0 list-disc space-y-2 print:space-y-1.5 pl-5 marker:text-[var(--accent)] marker:text-[0.7em]';
export const subBulletListClass = 'm-0 list-disc space-y-2 print:space-y-1.5 pl-5 text-[var(--ink-strong)] marker:text-[var(--accent)] marker:text-[0.7em]';
