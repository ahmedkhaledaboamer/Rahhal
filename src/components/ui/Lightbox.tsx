import { useCallback, useEffect, useRef, type TouchEvent } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, m } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBodyLock } from '../../hooks/useBodyLock';
import { EASE_OUT } from '../../utils/motion';

export type LightboxImage = {src: string;alt: string;};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const { t, isRTL, sign, dir } = useLanguage();
  const open = index !== null;
  useBodyLock(open);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Arrow keys follow reading direction.
      if (e.key === 'ArrowRight') go(isRTL ? -1 : 1);
      if (e.key === 'ArrowLeft') go(isRTL ? 1 : -1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, go, onClose, isRTL]);

  // Plain touch swipe (framer's `drag` needs its heavier feature bundle).
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null || images.length < 2) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 60) return;
    const towardsStart = dx * sign > 0; // swiped toward reading start → previous
    go(towardsStart ? -1 : 1);
  };

  const current = index !== null ? images[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && current &&
      <m.div
        dir={dir}
        role="dialog"
        aria-modal="true"
        aria-label={current.alt}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}>
        
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-white">
            <p className="text-sm font-semibold text-white/80" aria-live="polite">
              {t.a11y.imageCounter} <bdi dir="ltr">{index! + 1}</bdi> {t.a11y.of} <bdi dir="ltr">{images.length}</bdi>
            </p>
            <button
            type="button"
            onClick={onClose}
            aria-label={t.a11y.close}
            autoFocus
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <m.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="max-h-[80svh] max-w-full touch-pan-y rounded-2xl object-contain shadow-2xl" />
          
          </AnimatePresence>

          <p className="absolute inset-x-0 bottom-6 px-6 text-center text-sm text-white/80">{current.alt}</p>

          {images.length > 1 &&
        <>
              <NavButton label={t.a11y.prev} onClick={() => go(-1)} position="start" />
              <NavButton label={t.a11y.next} onClick={() => go(1)} position="end" />
            </>
        }
        </m.div>
      }
    </AnimatePresence>,
    document.body
  );
}

function NavButton({ label, onClick, position }: {label: string;onClick: () => void;position: 'start' | 'end';}) {
  const Icon = position === 'start' ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:flex ${
      position === 'start' ? 'start-4' : 'end-4'}`
      }>
      
      <Icon className="h-6 w-6 rtl:rotate-180" aria-hidden="true" />
    </button>);

}