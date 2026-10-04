import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { faqs } from '../../data/faqs';
import { EASE_OUT } from '../../utils/motion';
import { PlaceholderText } from '../ui/PlaceholderText';

export function FaqAccordion() {
  const { pick } = useLanguage();
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <ul className="divide-y divide-ink/10 rounded-3xl bg-white px-6 shadow-soft ring-1 ring-ink/5 sm:px-8">
      {faqs.map((f) => {
        const isOpen = open === f.id;
        return (
          <li key={f.id}>
            <h3>
              <button
                type="button"
                id={`faq-btn-${f.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${f.id}`}
                onClick={() => setOpen(isOpen ? null : f.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-start font-bold text-ink transition-colors duration-200 hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold">
                
                <span>{pick(f.q)}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-200 ease-brand ${
                  isOpen ? 'rotate-45 bg-gold text-ink' : 'bg-primary-light text-primary-dark'}`
                  }>
                  
                  <PlusIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <m.div
                id={`faq-panel-${f.id}`}
                role="region"
                aria-labelledby={`faq-btn-${f.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: EASE_OUT }}
                className="overflow-hidden">
                
                  <p className="pb-5 pe-12 text-[15px] text-ink/70">
                    <PlaceholderText text={pick(f.a)} />
                  </p>
                </m.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}