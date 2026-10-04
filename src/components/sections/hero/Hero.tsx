import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type PanInfo } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useBooking } from '../../../contexts/BookingContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import { heroSlides, type HeroAction } from '../../../data/heroSlides';
import { images } from '../../../data/images';
import { EASE_OUT } from '../../../utils/motion';
import { scrollToSection } from '../../../utils/scroll';
import { inquiryWhatsappLink } from '../../../utils/whatsapp';
import { WhatsAppIcon } from '../../icons/BrandIcons';
import { Button } from '../../ui/Button';
import { HeroDecor } from './HeroDecor';
import { QuickSearch } from './QuickSearch';

const SLIDE_MS = 7000;

export function Hero() {
  const { t, pick, lang, sign } = useLanguage();
  const { openInquiry, goToTrips } = useBooking();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setTimeout(() => go(1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduce, go]);

  const slide = heroSlides[index];
  const words = pick(slide.title).split(' ');

  const runAction = (action: HeroAction) => {
    if (action === 'inquiry') openInquiry();
    if (action === 'domestic') goToTrips('domestic');
    if (action === 'umrah') goToTrips('umrah');
    if (action === 'visas') scrollToSection('visas');
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 70) return;
    go(info.offset.x * sign > 0 ? -1 : 1);
  };

  return (
    <section
      id="home"
      ref={ref}
      aria-roledescription="carousel"
      aria-label={t.hero.srTitle}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-primary-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}>
      
      <h1 className="sr-only">{t.hero.srTitle}</h1>

      {/* Background slides */}
      <motion.div style={{ y: reduce ? 0 : bgY }} className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}>
            
            <motion.img
              src={images[slide.image]}
              alt={pick(slide.alt)}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: reduce ? 1 : 1.12 }}
              transition={{ duration: SLIDE_MS / 1000 + 1, ease: 'linear' }}
              loading={index === 0 ? 'eager' : 'lazy'} />
            
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30" />
        <div className="absolute inset-0 from-ink/60 to-transparent ltr:bg-gradient-to-r rtl:bg-gradient-to-l" />
      </motion.div>

      <HeroDecor />

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={onDragEnd}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-36 sm:px-6 lg:px-8 lg:pt-40">
        
        <div className="max-w-3xl" aria-live={paused ? 'polite' : 'off'}>
          <AnimatePresence mode="wait">
            <motion.div key={`${slide.id}-${lang}`} exit={{ opacity: 0, y: -10, transition: { duration: 0.18 } }}>
              <h2 className="text-balance text-4xl font-extrabold leading-[1.3] text-white sm:text-5xl lg:text-[4rem] ltr:leading-[1.08] ltr:tracking-tight">
                {words.map((w, i) =>
                <motion.span
                  key={`${w}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: '0.45em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.08 + i * 0.06 }}>
                  
                    {w}
                    {i < words.length - 1 && '\u00A0'}
                  </motion.span>
                )}
              </h2>
              <motion.p
                className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 + words.length * 0.06 }}>
                
                {pick(slide.text)}
              </motion.p>
              <motion.div
                className="mt-9 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.3 + words.length * 0.06 }}>
                
                <Button variant="gold" size="lg" onClick={() => runAction(slide.action)}>
                  {pick(slide.cta)}
                </Button>
                <Button variant="glass" size="lg" href={inquiryWhatsappLink(lang)} external icon={<WhatsAppIcon className="h-5 w-5" />}>
                  {t.hero.whatsappCta}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider controls */}
        <div className="mt-12 flex items-center gap-4">
          <SliderArrow label={t.a11y.prev} onClick={() => go(-1)} icon="prev" />
          <div className="flex items-center gap-2">
            {heroSlides.map((s, i) =>
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.a11y.goToSlide} ${i + 1}`}
              aria-current={i === index}
              className="relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-[width] duration-300 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{ width: i === index ? 48 : 16 }}>
              
                {i === index &&
              <motion.span
                key={`${index}-${paused}`}
                className="absolute inset-0 rounded-full bg-gold"
                initial={{ scaleX: reduce || paused ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduce || paused ? 0 : SLIDE_MS / 1000, ease: 'linear' }}
                style={{ transformOrigin: sign === 1 ? 'left' : 'right' }} />

              }
              </button>
            )}
          </div>
          <SliderArrow label={t.a11y.next} onClick={() => go(1)} icon="next" />
          <span className="ms-2 text-sm font-semibold text-white/70">
            <bdi dir="ltr">
              {String(index + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </bdi>
          </span>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <QuickSearch />
      </div>

      {/* Cloud edge */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 w-full text-cloud md:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor">
        
        <path d="M0 80V44c60-14 120-24 190-16 70 9 110 30 190 30s130-34 220-34 140 30 230 30 140-36 230-36 150 26 230 30c60 3 110-8 150-14v46z" />
      </svg>
    </section>);

}

function SliderArrow({ label, onClick, icon }: {label: string;onClick: () => void;icon: 'prev' | 'next';}) {
  const Icon = icon === 'prev' ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      
      <Icon className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
    </button>);

}