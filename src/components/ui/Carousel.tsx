import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

type CarouselProps = {
  items: ReactNode[];
  label: string;
  /** Milliseconds between auto-advances. */
  interval?: number;
  /** Width classes for each slide; default shows 1 / 2 / 3 / 4 per row. */
  slideClassName?: string;
};

/**
 * Auto-advancing, swipeable single-row carousel built on native scroll-snap.
 * Pauses on hover/focus, when off-screen, and for users who prefer reduced motion.
 */
export function Carousel({
  items,
  label,
  interval = 3500,
  slideClassName = 'basis-full sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)] xl:basis-[calc((100%-3.75rem)/4)]'
}: CarouselProps) {
  const { t, dir } = useLanguage();
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  /** How many slides fit in the track right now, and therefore the last index we can start at. */
  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return { maxIndex: 0 };
    const visible = Math.max(1, Math.round(track.clientWidth / first.offsetWidth));
    return { maxIndex: Math.max(0, items.length - visible) };
  }, [items.length]);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const { maxIndex } = measure();
      const target = i > maxIndex ? 0 : i < 0 ? maxIndex : i;
      const slide = track.children[target] as HTMLElement | undefined;
      if (!slide) return;
      // Distance between the slide's start edge and the track's start edge works in both LTR and RTL.
      const tr = track.getBoundingClientRect();
      const sr = slide.getBoundingClientRect();
      const delta = dir === 'rtl' ? sr.right - tr.right : sr.left - tr.left;
      track.scrollBy({ left: delta, behavior: reducedMotion ? 'auto' : 'smooth' });
    },
    [dir, measure, reducedMotion]
  );

  // Keep the active index and page count in sync with scrolling (swipe, drag, buttons) and resizes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const sync = () => {
      const tr = track.getBoundingClientRect();
      let best = 0;
      let bestDist = Infinity;
      Array.from(track.children).forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const dist = Math.abs(dir === 'rtl' ? r.right - tr.right : r.left - tr.left);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      const { maxIndex } = measure();
      setIndex(Math.min(best, maxIndex));
      setPageCount(maxIndex + 1);
    };
    let frame = 0;
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(() => {
        frame = 0;
        sync();
      });
    };
    sync();
    track.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [dir, measure]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    io.observe(track);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView || reducedMotion || pageCount <= 1) return;
    const id = window.setInterval(() => {
      if (!document.hidden) goTo(index + 1);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, inView, reducedMotion, pageCount, index, interval, goTo]);

  const PrevIcon = dir === 'rtl' ? ChevronRightIcon : ChevronLeftIcon;
  const NextIcon = dir === 'rtl' ? ChevronLeftIcon : ChevronRightIcon;
  const navBtn =
    'flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft ring-1 ring-ink/10 transition-colors duration-200 hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}>

      <ul
        ref={trackRef}
        className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4 pt-1">

        {items.map((item, i) =>
        <li key={i} className={`flex shrink-0 snap-start ${slideClassName}`} aria-roledescription="slide" aria-label={`${i + 1} / ${items.length}`}>
            {item}
          </li>
        )}
      </ul>

      {pageCount > 1 &&
      <div className="mt-4 flex items-center justify-center gap-4">
          <button type="button" className={navBtn} aria-label={t.a11y.prev} onClick={() => goTo(index - 1)}>
            <PrevIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }, (_, i) =>
          <button
            key={i}
            type="button"
            aria-label={`${i + 1} / ${pageCount}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${
            i === index ? 'w-7 bg-gold' : 'w-2.5 bg-ink/20 hover:bg-ink/40'}`} />

          )}
          </div>
          <button type="button" className={navBtn} aria-label={t.a11y.next} onClick={() => goTo(index + 1)}>
            <NextIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      }
    </div>);

}
