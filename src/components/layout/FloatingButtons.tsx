import { m } from 'framer-motion';
import { PhoneIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { EASE_OUT } from '../../utils/motion';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';

/** Floating WhatsApp (all screens) + call (mobile) on the reading-end corner. */
export function FloatingButtons() {
  const { t, lang } = useLanguage();
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT, delay: 1.2 }}
      className="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-3">
      
      <a
        href={contact.phoneHref}
        aria-label={t.a11y.callFloat}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-white shadow-lift transition-transform duration-200 active:scale-95 md:hidden">
        
        <PhoneIcon className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={inquiryWhatsappLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.a11y.whatsappFloat}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-105 active:scale-95">
        
        <span aria-hidden="true" className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </m.div>);

}