import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { gulfCountries, gulfPrograms, gulfVisaTypes } from '../../data/international';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { CheckList } from '../ui/CheckList';
import { SmartImage } from '../ui/SmartImage';
import { Disclaimer } from './Disclaimer';
import { ProgramCard } from './ProgramCard';

export function GulfPanel() {
  const { t, pick, lang } = useLanguage();
  const { openInquiry } = useBooking();
  const g = t.trips.international.gulf;

  return (
    <div className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div>
          <p className="text-lg text-ink/75">{g.intro}</p>
          <h3 className="mt-8 text-xl font-extrabold text-ink">{g.visaTypesTitle}</h3>
          <motion.ul variants={stagger(0.05)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-5 space-y-3">
            {gulfVisaTypes.map((v) => {
              const Icon = v.icon;
              return (
                <motion.li key={v.id} variants={fadeUp} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink/5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{pick(v.title)}</p>
                    <p className="text-sm text-ink/65">{pick(v.text)}</p>
                  </div>
                </motion.li>);

            })}
          </motion.ul>
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-ink">{g.countriesTitle}</h3>
          <motion.ul
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            
            {gulfCountries.map((c, i) =>
            <motion.li
              key={c.id}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-2xl shadow-soft ${i === 0 ? 'col-span-2 sm:row-span-2' : ''}`}>
              
                {c.image &&
              <SmartImage
                src={images[c.image]}
                alt=""
                aspect={i === 0 ? 'aspect-[16/10] sm:aspect-auto sm:h-full' : 'aspect-[4/3]'}
                className={i === 0 ? 'sm:absolute sm:inset-0' : ''} />

              }
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <p className="flex items-center gap-2 font-extrabold text-white">
                    <span aria-hidden="true" className="text-xl leading-none">
                      {c.flag}
                    </span>
                    {pick(c.name)}
                  </p>
                  {c.detail && <p className="mt-1 text-xs text-white/80">{pick(c.detail)}</p>}
                </div>
              </motion.li>
            )}
          </motion.ul>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5 md:p-10">
        <h3 className="text-xl font-extrabold text-ink">{g.offerTitle}</h3>
        <div className="mt-6">
          <CheckList items={g.offer} columns={2} />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-extrabold text-ink">{g.programsTitle}</h3>
        <motion.ul
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {gulfPrograms.map((p) =>
          <ProgramCard key={p.id} program={p} />
          )}
        </motion.ul>
      </div>

      <div className="space-y-6">
        <Disclaimer text={g.disclaimer} />
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="gold" size="lg" onClick={() => openInquiry({ service: 'visaGulf' })}>
            {g.cta}
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            href={inquiryWhatsappLink(lang, t.trips.international.subTabs.gulf)}
            external
            icon={<WhatsAppIcon className="h-5 w-5" />}>
            
            {t.trips.common.askOnWhatsapp}
          </Button>
        </div>
      </div>
    </div>);

}