import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useBooking } from '../../../contexts/BookingContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import { heroSlides, type HeroAction } from '../../../data/heroSlides';
import { images } from '../../../data/images';
import { usePauseOffscreen } from '../../../hooks/usePauseOffscreen';
import { useScrollFrame } from '../../../hooks/useScrollFrame';
import { EASE_OUT } from '../../../utils/motion';
import { scrollToSection } from '../../../utils/scroll';
import { responsiveSrcSet } from '../../../utils/srcset';
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
  const bgRef = useRef<HTMLDivElement>(null);
  usePauseOffscreen(ref);

  // Parallax: background drifts down 0→18% as the hero scrolls out of view.
  useScrollFrame(() => {
    if (reduce || !ref.current || !bgRef.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / r.height));
    bgRef.current.style.transform = `translate3d(0, ${p * 18}%, 0)`;
  }, ref);

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

  // Plain touch swipe: framer's `drag` would switch on its layout-measuring engine for the whole page.
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 70) return;
    go(dx * sign > 0 ? -1 : 1);
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
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <AnimatePresence initial={false}>
          <m.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}>
            
            {/* Ken Burns zoom is a CSS animation (.hero-kenburns) so it stays on the compositor. */}
            <img
              src={images[slide.image]}
              srcSet={responsiveSrcSet(images[slide.image])}
              sizes="100vw"
              alt={pick(slide.alt)}
              {...{ fetchpriority: index === 0 ? 'high' : 'auto' }}
              className="hero-kenburns h-full w-full object-cover"
              style={{ animationDuration: `${SLIDE_MS / 1000 + 1}s` }}
              loading={index === 0 ? 'eager' : 'lazy'} />
            
          </m.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30" />
        <div className="absolute inset-0 from-ink/60 to-transparent ltr:bg-gradient-to-r rtl:bg-gradient-to-l" />
      </div>

      <HeroDecor />

      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-36 sm:px-6 lg:px-8 lg:pt-40">
        
        <div className="max-w-3xl" aria-live={paused ? 'polite' : 'off'}>
          {/* initial={false}: first slide's text is the LCP element, so it paints immediately instead of fading in. */}
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={`${slide.id}-${lang}`} exit={{ opacity: 0, y: -10, transition: { duration: 0.18 } }}>
              <h2 className="text-balance text-4xl font-extrabold leading-[1.3] text-white sm:text-5xl lg:text-[4rem] ltr:leading-[1.08] ltr:tracking-tight">
                {words.map((w, i) =>
                <m.span
                  key={`${w}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: '0.45em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.08 + i * 0.06 }}>
                  
                    {w}
                    {i < words.length - 1 && '\u00A0'}
                  </m.span>
                )}
              </h2>
              <m.p
                className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.2 + words.length * 0.06 }}>
                
                {pick(slide.text)}
              </m.p>
              <m.div
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
              </m.div>
            </m.div>
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
              <span
                key={`${index}-${paused}`}
                className={`absolute inset-0 rounded-full bg-gold ${reduce || paused ? '' : 'hero-dot-progress'}`}
                style={{ transformOrigin: sign === 1 ? 'left' : 'right', animationDuration: `${SLIDE_MS / 1000}s` }} />

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
      </div>

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