import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { europeDestinations, europeOnRequest, europePrograms } from '../../data/international';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { CheckList } from '../ui/CheckList';
import { SmartImage } from '../ui/SmartImage';
import { Disclaimer } from './Disclaimer';
import { ProgramCard } from './ProgramCard';

export function EuropePanel() {
  const { t, pick, lang } = useLanguage();
  const { openInquiry } = useBooking();
  const e = t.trips.international.europe;

  return (
    <div className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-lg text-ink/75">{e.intro}</p>
          <h3 className="mt-8 text-xl font-extrabold text-ink">{e.destinationsTitle}</h3>
          <motion.ul variants={stagger(0.03)} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-5 flex flex-wrap gap-2.5">
            {europeDestinations.map((c) =>
            <motion.li
              key={c.id}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft ring-1 ring-ink/5">
              
                <span aria-hidden="true" className="text-lg leading-none">
                  {c.flag}
                </span>
                {pick(c.name)}
              </motion.li>
            )}
          </motion.ul>
          <p className="mt-5 text-sm font-semibold text-ink/60">{e.onRequestLabel}</p>
          <ul className="mt-2.5 flex flex-wrap gap-2.5">
            {europeOnRequest.map((c) =>
            <li
              key={c.id}
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-primary/40 px-4 py-2 text-sm font-semibold text-primary-dark">
              
                <span aria-hidden="true" className="text-lg leading-none">
                  {c.flag}
                </span>
                {pick(c.name)}
              </li>
            )}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <SmartImage src={images.santorini} alt={lang === 'ar' ? 'سانتوريني باليونان' : 'Santorini, Greece'} aspect="aspect-[3/4]" className="rounded-3xl shadow-lift" />
          <div className="grid gap-4 pt-10">
            <SmartImage src={images.barcelona} alt={lang === 'ar' ? 'برشلونة' : 'Barcelona'} aspect="aspect-square" className="rounded-3xl shadow-soft" />
            <SmartImage src={images.vienna} alt={lang === 'ar' ? 'فيينا' : 'Vienna'} aspect="aspect-[4/3]" className="rounded-3xl shadow-soft" />
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5 md:p-10">
        <h3 className="text-xl font-extrabold text-ink">{e.servicesTitle}</h3>
        <div className="mt-6">
          <CheckList items={e.services} columns={2} />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-extrabold text-ink">{e.programsTitle}</h3>
        <motion.ul
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          
          {europePrograms.map((p) =>
          <ProgramCard key={p.id} program={p} />
          )}
        </motion.ul>
      </div>

      <div className="space-y-6">
        <Disclaimer text={e.disclaimer} />
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="gold" size="lg" onClick={() => openInquiry({ service: 'visaEurope' })}>
            {e.cta}
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            href={inquiryWhatsappLink(lang, t.trips.international.subTabs.europe)}
            external
            icon={<WhatsAppIcon className="h-5 w-5" />}>
            
            {t.trips.common.askOnWhatsapp}
          </Button>
        </div>
      </div>
    </div>);

}