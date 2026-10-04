import React, { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Lang } from '../../types/i18n';

type LanguageSwitcherProps = {
  /** compact = "AR | EN"; full = "العربية / English" */
  variant?: 'compact' | 'full';
  tone?: 'light' | 'dark';
};

const options: {lang: Lang;code: string;label: string;}[] = [
{ lang: 'ar', code: 'AR', label: 'العربية' },
{ lang: 'en', code: 'EN', label: 'English' }];


export function LanguageSwitcher({ variant = 'compact', tone = 'light' }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();
  const layoutId = useId();
  const [announce, setAnnounce] = useState('');

  const choose = (next: Lang) => {
    if (next === lang) return;
    setLang(next);
    // Announce in the language being switched to.
    setAnnounce(next === 'ar' ? 'تم التبديل إلى اللغة العربية' : 'Language switched to English');
  };

  return (
    <div
      role="group"
      aria-label={t.a11y.switchLang}
      className={`relative inline-flex items-center rounded-full p-1 ${
      tone === 'dark' ? 'bg-white/10 ring-1 ring-white/20' : 'bg-primary-light ring-1 ring-primary/15'}`
      }>
      
      {options.map((o) => {
        const active = o.lang === lang;
        return (
          <button
            key={o.lang}
            type="button"
            lang={o.lang}
            aria-pressed={active}
            aria-label={o.label}
            onClick={() => choose(o.lang)}
            className={`relative z-10 rounded-full px-3 py-1.5 text-xs font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
            active ? 'text-ink' : tone === 'dark' ? 'text-white/75 hover:text-white' : 'text-primary-dark/75 hover:text-primary-dark'} ${
            variant === 'full' ? 'px-4 text-sm' : ''}`}>
            
            {active &&
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 -z-10 rounded-full bg-gold shadow-sm"
              transition={{ type: 'spring', stiffness: 500, damping: 38 }} />

            }
            <span style={{ fontFamily: o.lang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {variant === 'full' ? o.label : o.code}
            </span>
          </button>);

      })}
      <span className="sr-only" role="status" aria-live="polite">
        {announce}
      </span>
    </div>);

}