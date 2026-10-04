import { useEffect, type RefObject } from 'react';

/** Marks `ref` with `data-offscreen` while it is out of view, which pauses its CSS animations (see index.css). */
export function usePauseOffscreen(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.removeAttribute('data-offscreen');
      else el.setAttribute('data-offscreen', '');
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
