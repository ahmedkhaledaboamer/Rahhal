import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { EASE_OUT } from '../../utils/motion';
import { prefersReducedMotion } from '../../utils/scroll';

const SESSION_KEY = 'rahhal-intro-seen';

/** Brief logo intro on the first page load of a session. */
export function IntroLoader() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem(SESSION_KEY) && !prefersReducedMotion();
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!visible) return;
    const id = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {

        /* ignore */}
    }, 950);
    return () => window.clearTimeout(id);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible &&
      <m.div
        className="bg-pattern fixed inset-0 z-[100] flex items-center justify-center bg-cloud"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        role="status"
        aria-label={t.a11y.loading}>
        
          <m.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="flex flex-col items-center gap-5">
          
            <img src={images.logo} alt={t.brand.logoAlt} width={309} height={320} className="h-32 w-auto drop-shadow-xl md:h-40" />
            <div className="h-1 w-28 overflow-hidden rounded-full bg-primary/15">
              <m.div
              className="h-full bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              style={{ transformOrigin: 'center' }} />
            
            </div>
          </m.div>
        </m.div>
      }
    </AnimatePresence>);

}