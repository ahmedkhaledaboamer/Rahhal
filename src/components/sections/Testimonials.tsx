import React from 'react';
import { MessageSquarePlusIcon, QuoteIcon, StarIcon, UserIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { testimonials, type Testimonial } from '../../data/testimonials';
import { whatsappLink } from '../../utils/whatsapp';
import { Button } from '../ui/Button';
import { PlaceholderText } from '../ui/PlaceholderText';
import { SectionTitle } from '../ui/SectionTitle';

export function Testimonials() {
  const { t, lang } = useLanguage();

  const shareMessage = lang === 'ar' ? 'مرحبًا رحال، أريد مشاركة رأيي في رحلتي معكم' : 'Hello Rahhal, I would like to share feedback about my trip with you.';

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="bg-pattern absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="testimonials-title" title={t.testimonials.title} align="start" />
      </div>

      {/* Single-row marquee: auto-scrolls, pauses on hover/focus, becomes a manual scroller with reduced motion. */}
      <div
        role="region"
        aria-label={t.testimonials.carouselLabel}
        className="marquee marquee-mask relative mt-12 overflow-hidden motion-reduce:overflow-x-auto">
        
        <div
          className="marquee-track flex w-max py-4"
          style={{ '--marquee-duration': `${testimonials.length * 7}s` } as React.CSSProperties}>
          
          {[0, 1].map((copy) =>
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className={`flex shrink-0 gap-6 pe-6 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}>
            
              {testimonials.map((item) =>
            <li key={item.id} className="w-[300px] shrink-0 sm:w-[360px]">
                  <TestimonialCard item={item} />
                </li>
            )}
            </ul>
          )}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink/5 md:flex-row md:p-8">
          <div className="flex items-center gap-4 text-center md:text-start">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark md:flex">
              <StarIcon className="h-6 w-6 fill-current" aria-hidden="true" />
            </span>
            <p className="font-semibold text-ink/80">{t.testimonials.rateBarText}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {/* TODO: set contact.googleReviewUrl to the Google Business review link */}
            <Button variant="gold" href={contact.googleReviewUrl} external={contact.googleReviewUrl !== '#'} icon={<StarIcon className="h-4 w-4" aria-hidden="true" />}>
              {t.testimonials.rateGoogle}
            </Button>
            <Button variant="outline" href={whatsappLink(shareMessage)} external icon={<MessageSquarePlusIcon className="h-4 w-4" aria-hidden="true" />}>
              {t.testimonials.share}
            </Button>
          </div>
        </div>
      </div>
    </section>);

}

function TestimonialCard({ item }: {item: Testimonial;}) {
  const { t } = useLanguage();
  const isPlaceholder = !item.review;
  const initial = item.name?.trim().charAt(0) ?? '';

  return (
    <article
      className={`flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-lift ${
      isPlaceholder ? 'border-2 border-dashed border-gold/50' : 'ring-1 ring-ink/5'}`
      }>
      
      <div className="flex items-start justify-between gap-3">
        <QuoteIcon className="h-9 w-9 text-gold rtl:-scale-x-100" aria-hidden="true" />
        {isPlaceholder &&
        <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold text-gold-dark">{t.testimonials.placeholderBadge}</span>
        }
      </div>

      <div className="mt-4" aria-label={item.rating ? `${item.rating} / 5 ${t.a11y.stars}` : t.testimonials.placeholderRating}>
        {item.rating ?
        <div className="flex gap-1" dir="ltr">
            {Array.from({ length: 5 }, (_, i) =>
          <StarIcon key={i} className={`h-4 w-4 ${i < item.rating! ? 'fill-gold text-gold' : 'text-ink/20'}`} aria-hidden="true" />
          )}
          </div> :

        <p className="flex items-center gap-2 text-sm">
            <span className="flex gap-0.5" dir="ltr" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) =>
            <StarIcon key={i} className="h-4 w-4 text-ink/15" />
            )}
            </span>
            <PlaceholderText text={t.testimonials.placeholderRating} />
          </p>
        }
      </div>

      <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink/80">
        {item.review ?
        <p lang={item.review.lang} dir={item.review.lang === 'ar' ? 'rtl' : 'ltr'}>
            {item.review.text}
          </p> :

        <p>
            <PlaceholderText text={t.testimonials.placeholderText} />
          </p>
        }
      </blockquote>

      <footer className="mt-7 flex items-center gap-3 border-t border-ink/5 pt-5">
        {item.photo ?
        <img src={item.photo} alt={item.name ?? ''} className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-gold/60 ring-offset-2" loading="lazy" /> :

        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-lg font-extrabold text-primary-dark" aria-hidden="true">
            {initial || <UserIcon className="h-5 w-5" />}
          </span>
        }
        <div className="min-w-0">
          <p className="font-bold text-ink">{item.name ?? <PlaceholderText text={t.testimonials.placeholderName} />}</p>
          <p className="text-sm text-ink/60">{item.service ?? <PlaceholderText text={t.testimonials.placeholderService} />}</p>
        </div>
      </footer>
    </article>);

}
