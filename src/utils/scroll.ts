export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Below-the-fold sections use `content-visibility: auto`, so sections that have never been on screen
 * have placeholder heights and a jump can land a little off. Once scrolling ends, re-align on the target.
 */
export function settleOnSection(el: HTMLElement, tries = 2): void {
  const started = performance.now();
  let timer = 0;
  const check = () => {
    window.removeEventListener('scrollend', check);
    window.clearTimeout(timer);
    if (performance.now() - started > 4000) return;
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    if (Math.abs(el.getBoundingClientRect().top - margin) <= 4 || tries <= 0) return;
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    settleOnSection(el, tries - 1);
  };
  const hasScrollEnd = 'onscrollend' in window;
  if (hasScrollEnd) window.addEventListener('scrollend', check, { once: true });
  // Fallback for browsers without `scrollend`, and for when no scroll happened so it never fires.
  timer = window.setTimeout(check, hasScrollEnd ? 2500 : 900);
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  settleOnSection(el);
}
