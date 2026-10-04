import React from 'react';
import { ClockIcon, ExternalLinkIcon, LandmarkIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { mapEmbedUrl } from '../../utils/maps';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { Ltr } from '../ui/Ltr';
import { PlaceholderText } from '../ui/PlaceholderText';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';

export function MapSection() {
  const { t, lang, sign } = useLanguage();
  const m = t.map;

  return (
    <section id="location" aria-labelledby="location-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="location-title" title={m.title} />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal x={-24 * sign} y={0} className="overflow-hidden rounded-3xl bg-white p-2 shadow-lift ring-1 ring-ink/5">
            <iframe
              key={lang}
              title={t.a11y.mapTitle}
              src={mapEmbedUrl(lang)}
              className="h-[340px] w-full rounded-[1.25rem] md:h-full md:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen />
            
          </Reveal>

          <Reveal x={24 * sign} y={0} className="flex flex-col rounded-3xl bg-primary-deep p-8 text-white shadow-lift md:p-10">
            <dl className="space-y-6">
              <Row icon={<MapPinIcon className="h-5 w-5" />} label={m.addressLabel}>
                <PlaceholderText text={m.address} />
              </Row>
              <Row icon={<LandmarkIcon className="h-5 w-5" />} label={m.landmarkLabel}>
                <PlaceholderText text={m.landmark} />
              </Row>
              <Row icon={<ClockIcon className="h-5 w-5" />} label={m.hoursLabel}>
                <PlaceholderText text={m.hours} />
              </Row>
              <Row icon={<PhoneIcon className="h-5 w-5" />} label={m.phoneLabel}>
                <a href={contact.phoneHref} className="font-bold transition-colors duration-200 hover:text-gold-light">
                  <Ltr>{contact.phoneDisplay}</Ltr>
                </a>
              </Row>
              <Row icon={<WhatsAppIcon className="h-5 w-5" />} label={m.whatsappLabel}>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold transition-colors duration-200 hover:text-gold-light">
                  <Ltr>{contact.whatsappDisplay}</Ltr>
                </a>
              </Row>
            </dl>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-light underline-offset-4 hover:underline">
              
              {m.openInMaps}
              <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{t.a11y.opensNewTab}</span>
            </a>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Button variant="gold" href={contact.mapsUrl} external icon={<NavigationIcon className="h-4 w-4" aria-hidden="true" />}>
                {m.directions}
              </Button>
              <Button variant="glass" href={contact.phoneHref} icon={<PhoneIcon className="h-4 w-4" aria-hidden="true" />}>
                {m.callNow}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

function Row({ icon, label, children }: {icon: React.ReactNode;label: string;children: React.ReactNode;}) {
  return (
    <div className="relative min-h-10 ps-14">
      <dt className="text-xs font-bold text-white/60">
        <span className="absolute start-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold-light" aria-hidden="true">
          {icon}
        </span>
        {label}
      </dt>
      <dd className="mt-0.5 text-[15px] text-white/90">{children}</dd>
    </div>);

}