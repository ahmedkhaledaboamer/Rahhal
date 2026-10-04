import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, m } from 'framer-motion';
import { PhoneIcon, XIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { navItems, tripMenuItems } from '../../data/navigation';
import { useBodyLock } from '../../hooks/useBodyLock';
import { EASE_OUT, fadeUp, stagger } from '../../utils/motion';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Brand } from '../ui/Brand';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Ltr } from '../ui/Ltr';

type MobileDrawerProps = {open: boolean;onClose: () => void;active: string;};

export function MobileDrawer({ open, onClose, active }: MobileDrawerProps) {
  const { t, isRTL, dir, lang } = useLanguage();
  const { goToTrips, openInquiry } = useBooking();
  const closeRef = useRef<HTMLButtonElement>(null);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => closeRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Drawer enters from the reading-end edge.
  const offscreen = isRTL ? '-100%' : '100%';

  return createPortal(
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[60] xl:hidden" dir={dir}>
          <m.div
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose} />
        
          <m.aside
          role="dialog"
          aria-modal="true"
          aria-label={t.a11y.mainNav}
          initial={{ x: offscreen }}
          animate={{ x: 0 }}
          exit={{ x: offscreen }}
          transition={{ duration: 0.28, ease: EASE_OUT }}
          className="bg-pattern absolute bottom-0 end-0 top-0 flex w-[88%] max-w-sm flex-col bg-white shadow-lift">
          
            <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
              <Brand size="sm" onClick={onClose} />
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t.a11y.closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label={t.a11y.mainNav} className="flex-1 overflow-y-auto px-3 py-4">
              <m.ul variants={stagger(0.03, 0.08)} initial="hidden" animate="show" className="space-y-1">
                {navItems.map((key) =>
              <m.li key={key} variants={fadeUp}>
                    <a
                  href={`#${key}`}
                  onClick={onClose}
                  aria-current={active === key ? 'true' : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors duration-150 ${
                  active === key ? 'bg-primary-light text-primary-dark' : 'text-ink/80 hover:bg-cloud'}`
                  }>
                  
                      {t.nav[key]}
                      {active === key && <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />}
                    </a>
                    {key === 'trips' &&
                <ul className="mb-1 ms-4 mt-1 space-y-0.5 border-s-2 border-gold/40 ps-3">
                        {tripMenuItems.map((tab) =>
                  <li key={tab}>
                            <button
                      type="button"
                      onClick={() => {
                        onClose();
                        window.setTimeout(() => goToTrips(tab), 280);
                      }}
                      className="w-full rounded-lg px-3 py-2 text-start text-sm font-semibold text-ink/70 transition-colors duration-150 hover:bg-cloud hover:text-primary-dark">
                      
                              {t.nav.tripsMenu[tab]}
                            </button>
                          </li>
                  )}
                      </ul>
                }
                  </m.li>
              )}
              </m.ul>
            </nav>

            <div className="space-y-4 border-t border-ink/5 bg-white/90 px-5 py-5">
              <div className="flex justify-center">
                <LanguageSwitcher variant="full" />
              </div>
              <Button
              variant="gold"
              fullWidth
              onClick={() => {
                onClose();
                window.setTimeout(() => openInquiry(), 280);
              }}>
              
                {t.nav.book}
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button href={contact.phoneHref} variant="outline" size="sm" icon={<PhoneIcon className="h-4 w-4" aria-hidden="true" />}>
                  <Ltr>{contact.phoneDisplay}</Ltr>
                </Button>
                <Button href={inquiryWhatsappLink(lang)} external variant="whatsapp" size="sm" icon={<WhatsAppIcon className="h-4 w-4" />}>
                  {t.topbar.whatsapp}
                </Button>
              </div>
            </div>
          </m.aside>
        </div>
      }
    </AnimatePresence>,
    document.body
  );
}