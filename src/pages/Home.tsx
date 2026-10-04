import { Suspense, lazy, startTransition, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FloatingButtons } from '../components/layout/FloatingButtons';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/hero/Hero';
import { settleOnSection } from '../utils/scroll';

// Start downloading the below-the-fold chunk right away, in parallel with the first render.
const loadBelowFold = () => import('./BelowFold');
loadBelowFold();
const BelowFold = lazy(loadBelowFold);
const Footer = lazy(() => loadBelowFold().then((mod) => ({ default: mod.Footer })));

export function Home() {
  const { t } = useLanguage();
  // Header + hero paint first; the rest renders in a transition, which React time-slices
  // so the main thread never blocks long enough to make the page feel stuck.
  const [showRest, setShowRest] = useState(false);
  useEffect(() => {
    const id = window.requestAnimationFrame(() => startTransition(() => setShowRest(true)));
    return () => window.cancelAnimationFrame(id);
  }, []);

  // Native in-page links (#trips, #inquiry…) keep their default smooth jump; just re-align once it ends.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const id = link?.getAttribute('href')?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target && !e.defaultPrevented) settleOnSection(target);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-cloud font-sans text-ink">
      <a
        href="#main"
        className="sr-only z-[110] rounded-full bg-gold px-5 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4">

        {t.a11y.skip}
      </a>
      <div>

        <Header />
        <main id="main">
          <Hero />
          {showRest &&
          <Suspense fallback={null}>
              <BelowFold />
            </Suspense>
          }
        </main>
        {showRest &&
        <Suspense fallback={null}>
            <Footer />
          </Suspense>
        }
      </div>
      <FloatingButtons />
      <ScrollToTop />
    </div>);

}
