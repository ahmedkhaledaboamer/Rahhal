import { m } from 'framer-motion';
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon, ImagesIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Destination } from '../../data/destinations';
import { images } from '../../data/images';
import { fadeUp } from '../../utils/motion';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { PlaceholderText } from '../ui/PlaceholderText';
import { SmartImage } from '../ui/SmartImage';

type DestinationCardProps = {
  destination: Destination;
  onOpen: () => void;
  onBook: () => void;
};

export function DestinationCard({ destination: d, onOpen, onBook }: DestinationCardProps) {
  const { t, pick, lang } = useLanguage();
  const cover = d.images[0];

  return (
    <m.article
      variants={fadeUp}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5 transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0">
      
      <a
        href={`#trip-${d.id}`}
        onClick={(e) => {
          e.preventDefault();
          onOpen();
        }}
        className="relative block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-gold">
        
        <SmartImage src={images[cover.key]} alt={pick(cover.alt)} aspect="aspect-[4/3]" zoomOnHover />
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
        <span className="absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-ink backdrop-blur">
          <ImagesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <bdi dir="ltr">{d.images.length}</bdi>
        </span>
        <span className="absolute inset-x-5 bottom-4">
          <span className="block text-2xl font-extrabold text-white">{pick(d.name)}</span>
          <span className="block text-sm font-semibold text-gold-light">{pick(d.tagline)}</span>
          <span className="sr-only"> – {t.trips.common.details}</span>
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <p className="line-clamp-3 text-[15px] text-ink/70">{pick(d.description)}</p>

        <dl className="mt-5 space-y-2.5 text-sm">
          <div className="flex items-start gap-2.5">
            <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <dt className="sr-only">{t.trips.common.durationLabel}</dt>
            <dd className="text-ink/80">{pick(d.duration)}</dd>
          </div>
          <div className="flex items-start gap-2.5">
            <CalendarDaysIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <dt className="sr-only">{t.trips.common.seasonLabel}</dt>
            <dd className="line-clamp-2 text-ink/80">{pick(d.season)}</dd>
          </div>
        </dl>

        <div className="mt-5 rounded-2xl bg-cloud px-4 py-3 text-sm">
          <span className="font-bold text-primary-dark">{t.trips.common.priceLabel}: </span>
          <span className="text-ink/75">
            <PlaceholderText text={t.trips.common.price} />
          </span>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <Button variant="gold" size="sm" fullWidth onClick={onBook}>
                {t.trips.common.book}
              </Button>
            </div>
            <a
              href={inquiryWhatsappLink(lang, pick(d.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.trips.common.askWhatsapp} – ${pick(d.name)}`}
              title={t.trips.common.askWhatsapp}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dome text-white transition-colors duration-200 hover:bg-[#186640] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary-dark transition-colors duration-200 hover:text-primary">
            
            {t.trips.common.details}
            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </button>
        </div>
      </div>
    </m.article>);

}