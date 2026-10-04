import { useEffect, useRef, type RefObject } from 'react';

/**
 * Runs `onFrame` at most once per animation frame while the page scrolls or resizes,
 * and only while `watch` (if given) is on screen. Callbacks should read layout first and
 * then write styles directly, so React never re-renders and the browser never thrashes layout.
 *
 * Replaces framer-motion's `useScroll`, which kept re-measuring the whole page.
 */
export function useScrollFrame(onFrame: () => void, watch?: RefObject<Element>) {
  const cb = useRef(onFrame);
  cb.current = onFrame;

  useEffect(() => {
    let frame = 0;
    let visible = !watch;
    const run = () => {
      frame = 0;
      if (visible) cb.current();
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(run);
    };

    let io: IntersectionObserver | undefined;
    if (watch?.current) {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      });
      io.observe(watch.current);
    }

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      io?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [watch]);
}
