import { useRef, useState } from 'react';
import { m } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { navItems } from '../../data/navigation';
import { useScrollFrame } from '../../hooks/useScrollFrame';
import { useScrolled } from '../../hooks/useScrolled';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { EASE_OUT } from '../../utils/motion';
import { Brand } from '../ui/Brand';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { DesktopNav } from './DesktopNav';
import { MobileDrawer } from './MobileDrawer';
import { TopBar } from './TopBar';

export function Header() {
  const { t, isRTL } = useLanguage();
  const { openInquiry } = useBooking();
  const scrolled = useScrolled(40);
  const active = useScrollSpy(navItems);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useScrollFrame(() => {
    const el = progressRef.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
  });

  // Over the hero the header is fully transparent with white text; once the
  // page scrolls it condenses into a floating frosted-glass bar.
  const onDark = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-gold-dark via-gold to-gold-light will-change-transform"
        style={{ transform: 'scaleX(0)', transformOrigin: isRTL ? 'right' : 'left' }} />

      {/* Legibility scrim behind the transparent header */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-ink/60 via-ink/25 to-transparent transition-opacity duration-500 ${
        onDark ? 'opacity-100' : 'opacity-0'}`
        } />

      <m.div
        initial={false}
        animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.22, ease: EASE_OUT }}
        className="overflow-hidden">
        
        <TopBar />
      </m.div>

      <div
        className={`mx-auto max-w-7xl transition-[padding] duration-500 ease-brand ${
        scrolled ? 'px-3 pt-3 sm:px-4 lg:px-6' : 'px-0 pt-0'}`
        }>
        
        <div
          className={`flex items-center gap-3 border transition-[height,background-color,border-color,box-shadow,border-radius,padding] duration-500 ease-brand ${
          scrolled ?
          'h-16 rounded-2xl border-white/60 bg-white/75 ps-3 pe-2 shadow-glass backdrop-blur-md sm:ps-4' :
          'h-20 rounded-none border-transparent bg-transparent px-4 sm:px-6 lg:h-24 lg:px-8'}`
          }>
          
          <Brand onDark={onDark} size={scrolled ? 'sm' : 'md'} />
          <div className="ms-auto flex items-center gap-2 xl:gap-3">
            <DesktopNav active={active} onDark={onDark} />
            <span
              aria-hidden="true"
              className={`hidden h-6 w-px xl:block ${onDark ? 'bg-white/25' : 'bg-ink/10'}`} />
            
            <LanguageSwitcher tone={onDark ? 'dark' : 'light'} />
            <div className="hidden sm:block">
              <Button variant="gold" size="sm" onClick={() => openInquiry()}>
                {t.nav.book}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={t.a11y.openMenu}
              aria-expanded={drawerOpen}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:hidden ${
              onDark ?
              'bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/25' :
              'bg-primary-light text-primary-dark hover:bg-primary hover:text-white'}`
              }>
              
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} active={active} />
    </header>);

}
