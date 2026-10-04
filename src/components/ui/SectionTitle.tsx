import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { EASE_OUT, viewportOnce } from '../../utils/motion';

type SectionTitleProps = {
  title: string;
  subtitle?: React.ReactNode;
  align?: 'center' | 'start';
  tone?: 'light' | 'dark';
  id?: string;
};

export function SectionTitle({ title, subtitle, align = 'center', tone = 'light', id }: SectionTitleProps) {
  const { isRTL } = useLanguage();
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-start'}>
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className={`text-balance text-3xl font-extrabold leading-[1.35] md:text-4xl lg:text-[2.6rem] ltr:leading-[1.15] ltr:tracking-tight ${
        tone === 'dark' ? 'text-white' : 'text-ink'}`
        }>
        
        {title}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.15 }}
        style={{ transformOrigin: centered ? 'center' : isRTL ? 'right' : 'left' }}
        className={`mt-4 block h-1 w-20 rounded-full bg-gold ${centered ? 'mx-auto' : ''}`} />
      
      {subtitle &&
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.1 }}
        className={`mt-5 text-base md:text-lg ${tone === 'dark' ? 'text-white/80' : 'text-ink/70'}`}>
        
          {subtitle}
        </motion.p>
      }
    </div>);

}