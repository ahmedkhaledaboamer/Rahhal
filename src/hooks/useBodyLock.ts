import { useEffect } from 'react';

/** Locks page scroll while an overlay (drawer, modal, lightbox) is open. */
export function useBodyLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}