import React, { useState } from 'react';
import { CalendarDaysIcon, CirclePlusIcon, ClockIcon, TagIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Destination } from '../../data/destinations';
import { images } from '../../data/images';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { CheckList } from '../ui/CheckList';
import { Lightbox } from '../ui/Lightbox';
import { Modal } from '../ui/Modal';
import { PlaceholderText } from '../ui/PlaceholderText';
import { SmartImage } from '../ui/SmartImage';

type DestinationModalProps = {
  destination: Destination | null;
  onClose: () => void;
  onBook: (d: Destination) => void;
};

export function DestinationModal({ destination, onClose, onBook }: DestinationModalProps) {
  const { t, pick, lang } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const d = destination;
  const gallery = d ? d.images.map((img) => ({ src: images[img.key], alt: pick(img.alt) })) : [];

  return (
    <>
      <Modal open={Boolean(d)} onClose={onClose} labelledBy="destination-modal-title">
        {d &&
        <div>
            <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3" aria-label={t.trips.common.galleryLabel} role="group">
              {gallery.map((img, i) =>
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`${t.a11y.openImage}: ${img.alt}`}
              className={`group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-gold ${
              i === 0 ? 'col-span-2 sm:row-span-2' : ''}`
              }>
              
                  <SmartImage
                src={img.src}
                alt={img.alt}
                aspect={i === 0 ? 'aspect-[16/10] sm:aspect-auto sm:h-full' : 'aspect-[4/3]'}
                zoomOnHover />
              
                </button>
            )}
            </div>

            <div className="p-6 sm:p-10">
              <p className="text-sm font-bold text-gold-dark">{pick(d.tagline)}</p>
              <h3 id="destination-modal-title" className="mt-1 text-3xl font-extrabold text-ink">
                {pick(d.name)}
              </h3>
              <p className="mt-4 text-[17px] text-ink/75">{pick(d.description)}</p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <h4 className="mb-4 text-lg font-extrabold text-ink">{t.trips.common.highlightsTitle}</h4>
                  <CheckList items={d.highlights[lang]} />
                  <p className="mt-6 flex gap-2.5 rounded-2xl bg-gold/10 p-4 text-[15px] text-ink/80">
                    <CirclePlusIcon className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-ink">{t.trips.common.addonsLabel}: </strong>
                      {pick(d.addons)}
                    </span>
                  </p>
                </div>

                <dl className="space-y-3">
                  <InfoRow icon={<ClockIcon className="h-5 w-5" aria-hidden="true" />} label={t.trips.common.durationLabel} value={pick(d.duration)} />
                  <InfoRow icon={<CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />} label={t.trips.common.seasonLabel} value={pick(d.season)} />
                  <InfoRow icon={<TagIcon className="h-5 w-5" aria-hidden="true" />} label={t.trips.common.priceLabel} value={t.trips.common.price} />
                </dl>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-ink/5 pt-6">
                <Button variant="gold" size="lg" onClick={() => onBook(d)}>
                  {t.trips.common.book}
                </Button>
                <Button variant="whatsapp" size="lg" href={inquiryWhatsappLink(lang, pick(d.name))} external icon={<WhatsAppIcon className="h-5 w-5" />}>
                  {t.trips.common.askWhatsapp}
                </Button>
              </div>
            </div>
          </div>
        }
      </Modal>
      <Lightbox images={gallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onIndexChange={setLightboxIndex} />
    </>);

}

function InfoRow({ icon, label, value }: {icon: React.ReactNode;label: string;value: string;}) {
  return (
    <div className="flex gap-3 rounded-2xl bg-cloud p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary-dark shadow-sm">{icon}</span>
      <div>
        <dt className="text-xs font-bold text-primary-dark">{label}</dt>
        <dd className="mt-0.5 text-[15px] text-ink/80">
          <PlaceholderText text={value} />
        </dd>
      </div>
    </div>);

}