import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { EASE_OUT } from '../../utils/motion';

// Ring geometry
const SIZE = 56;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Back-to-top button with a scroll-progress ring, on the reading-start corner (WhatsApp owns the end corner). */
export function ScrollToTop() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // At most one read per frame, and a re-render only when the whole-number percentage changes.
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.round(Math.min(100, Math.max(0, pct))));
      setVisible(scrollTop > 300);
    };
    const update = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <AnimatePresence>
      {visible &&
      <m.button
        type="button"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.6, y: 20 }}
        transition={{ duration: 0.25, ease: EASE_OUT }}
        onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
        aria-label={`${t.a11y.backToTop} — ${Math.round(progress)}%`}
        className="group fixed bottom-5 start-5 z-40 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">

          <div className="relative" style={{ width: SIZE, height: SIZE }}>
            <svg width={SIZE} height={SIZE} aria-hidden="true" className="absolute inset-0 -rotate-90">
              <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" strokeWidth={STROKE} className="stroke-gold/20" />
              <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              className="stroke-gold"
              style={{ transition: 'stroke-dashoffset 120ms linear' }} />

            </svg>

            <div className="absolute inset-1.5 flex flex-col items-center justify-center rounded-full border border-gold/30 bg-primary-deep text-gold-light shadow-lift transition-colors duration-200 group-hover:bg-primary-dark">
              <ArrowUpIcon className="mb-0.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
              <span dir="ltr" className="text-[9px] font-bold leading-none tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </m.button>
      }
    </AnimatePresence>);

}
