import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { useScrollFrame } from '../../hooks/useScrollFrame';
import { responsiveSrcSet } from '../../utils/srcset';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function CtaBanner() {
  const { t, lang } = useLanguage();
  const { openInquiry } = useBooking();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax: background moves -12%→12% while the section crosses the viewport.
  useScrollFrame(() => {
    if (reduce || !ref.current || !bgRef.current) return;
    const r = ref.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
    bgRef.current.style.transform = `translate3d(0, ${-12 + p * 24}%, 0)`;
  }, ref);

  return (
    <section ref={ref} aria-labelledby="cta-title" className="relative isolate overflow-hidden py-28 lg:py-40">
      <div ref={bgRef} className="absolute -inset-y-[15%] inset-x-0 -z-10 will-change-transform">
        <img
          src={images.ctaDesert}
          srcSet={responsiveSrcSet(images.ctaDesert)}
          sizes="100vw"
          alt={lang === 'ar' ? 'صحراء سيناء وقت الغروب' : 'The Sinai desert at sunset'}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover" />
        
      </div>
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