import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function CtaBanner() {
  const { t, lang } = useLanguage();
  const { openInquiry } = useBooking();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} aria-labelledby="cta-title" className="relative isolate overflow-hidden py-28 lg:py-40">
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute -inset-y-[15%] inset-x-0 -z-10">
        <img
          src={images.ctaDesert}
          alt={lang === 'ar' ? 'صحراء سيناء وقت الغروب' : 'The Sinai desert at sunset'}
          loading="lazy"
          className="h-full w-full object-cover" />
        
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary-deep/75" />
      <div aria-hidden="true" className="bg-pattern-dark absolute inset-0 -z-10" />
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 id="cta-title" className="text-balance text-3xl font-extrabold leading-[1.35] text-white md:text-5xl ltr:leading-[1.12] ltr:tracking-tight">
          {t.cta.title}
        </h2>
        <span aria-hidden="true" className="mx-auto mt-5 block h-1 w-20 rounded-full bg-gold" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">{t.cta.text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button variant="gold" size="lg" onClick={() => openInquiry()}>
            {t.cta.book}
          </Button>
          <Button variant="glass" size="lg" href={inquiryWhatsappLink(lang)} external icon={<WhatsAppIcon className="h-5 w-5" />}>
            {t.hero.whatsappCta}
          </Button>
        </div>
      </Reveal>
    </section>);

}