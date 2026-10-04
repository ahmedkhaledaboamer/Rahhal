import { useEffect, useState } from 'react';

/** Returns the id of the section currently crossing the upper third of the viewport. */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
    );

    // Sections below the hero mount a moment after first paint, so keep looking until all are found.
    const pending = new Set(ids);
    const attach = () => {
      pending.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          pending.delete(id);
        }
      });
      if (!pending.size) mo.disconnect();
    };
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    attach();

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, [ids]);

  return active;
}
