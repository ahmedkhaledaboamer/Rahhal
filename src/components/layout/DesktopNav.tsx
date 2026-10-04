import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { navItems, tripMenuItems } from '../../data/navigation';
import { EASE_OUT } from '../../utils/motion';

export function DesktopNav({ active, onDark = false }: {active: string;onDark?: boolean;}) {
  const { t } = useLanguage();
  const { goToTrips } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <nav aria-label={t.a11y.mainNav} className="hidden xl:block">
      <ul className="flex items-center gap-0.5">
        {navItems.map((key) => {
          const isActive = active === key;
          const linkClass = `relative flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
          onDark ?
          isActive ? 'text-white' : 'text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] hover:text-white' :
          isActive ? 'text-primary-dark' : 'text-ink/70 hover:text-primary-dark'}`;

          const indicator = isActive &&
          <motion.span
            layoutId="nav-active"
            className={`absolute inset-0 -z-10 rounded-full ${
            onDark ? 'bg-white/15 ring-1 ring-white/25 backdrop-blur-sm' : 'bg-primary-light ring-1 ring-primary/10'}`
            }
            transition={{ type: 'spring', stiffness: 500, damping: 40 }} />;



          if (key === 'trips') {
            return (
              <li
                key={key}
                ref={wrapRef}
                className="relative isolate z-10"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}>
                
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                  onClick={() => setMenuOpen((v) => !v)}
                  className={linkClass}>
                  
                  {t.nav.trips}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true" />
                  
                  {indicator}
                </button>
                <AnimatePresence>
                  {menuOpen &&
                  <motion.ul
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: EASE_OUT }}
                    className="absolute start-0 top-full z-20 mt-1 w-56 origin-top rounded-2xl bg-white p-2 shadow-lift ring-1 ring-ink/5">
                    
                      {tripMenuItems.map((tab) =>
                    <li key={tab}>
                          <a
                        href="#trips"
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          goToTrips(tab);
                        }}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-ink/80 transition-colors duration-150 hover:bg-primary-light hover:text-primary-dark focus-visible:bg-primary-light focus-visible:outline-none">
                        
                            {t.nav.tripsMenu[tab]}
                          </a>
                        </li>
                    )}
                    </motion.ul>
                  }
                </AnimatePresence>
              </li>);

          }

          return (
            <li key={key} className="relative isolate">
              <a href={`#${key}`} aria-current={isActive ? 'true' : undefined} className={linkClass}>
                {t.nav[key]}
                {indicator}
              </a>
            </li>);

        })}
      </ul>
    </nav>);

}