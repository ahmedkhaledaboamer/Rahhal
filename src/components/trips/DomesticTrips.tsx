import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleXIcon, MapPinIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { destinations, type Destination } from '../../data/destinations';
import { stagger, viewportOnce } from '../../utils/motion';
import { CheckList } from '../ui/CheckList';
import { Reveal } from '../ui/Reveal';
import { DestinationCard } from './DestinationCard';
import { DestinationModal } from './DestinationModal';

export function DomesticTrips() {
  const { t, pick } = useLanguage();
  const { openInquiry } = useBooking();
  const [selected, setSelected] = useState<Destination | null>(null);

  const book = (d: Destination) => {
    setSelected(null);
    window.setTimeout(() => openInquiry({ service: 'domestic', destination: pick(d.name) }), selected ? 260 : 0);
  };

  return (
    <div>
      <p className="mx-auto max-w-3xl text-center text-lg text-ink/70">{t.trips.domestic.intro}</p>

      <motion.div
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {destinations.map((d) =>
        <DestinationCard key={d.id} destination={d} onOpen={() => setSelected(d)} onBook={() => book(d)} />
        )}
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5 md:p-10">
          <h3 className="text-xl font-extrabold text-ink">{t.trips.domestic.includesTitle}</h3>
          <div className="mt-6">
            <CheckList items={t.trips.domestic.includes} />
          </div>
          <p className="mt-6 flex gap-2.5 border-t border-ink/5 pt-5 text-[15px] text-ink/70">
            <CircleXIcon className="mt-1 h-5 w-5 shrink-0 text-ink/40" aria-hidden="true" />
            <span>
              <strong className="font-bold text-ink">{t.trips.domestic.excludesLabel} </strong>
              {t.trips.domestic.excludes}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.06} className="rounded-3xl bg-primary-dark p-8 text-white shadow-lift md:p-10">
          <h3 className="text-xl font-extrabold">{t.trips.domestic.moreTitle}</h3>
          <ul className="mt-6 space-y-4">
            {t.trips.domestic.more.map((item) =>
            <li key={item} className="flex gap-3 text-white/85">
                <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                {item}
              </li>
            )}
          </ul>
        </Reveal>
      </div>

      <DestinationModal destination={selected} onClose={() => setSelected(null)} onBook={book} />
    </div>);

}