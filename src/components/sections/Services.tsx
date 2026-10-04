import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { services } from '../../data/services';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { SectionTitle } from '../ui/SectionTitle';
import { SmartImage } from '../ui/SmartImage';

export function Services() {
  const { t, pick } = useLanguage();
  const { goToTrips } = useBooking();

  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="services-title" title={t.services.title} />
        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.li key={s.id} variants={fadeUp}>
                <a
                  href="#trips"
                  onClick={(e) => {
                    e.preventDefault();
                    goToTrips(s.tab, s.intlTab);
                  }}
                  className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl text-start shadow-soft transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 motion-reduce:hover:translate-y-0">
                  
                  <SmartImage src={images[s.image]} alt="" className="absolute inset-0" zoomOnHover />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                  <span className="absolute start-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 flex flex-col p-6">
                    <span className="text-2xl font-extrabold text-white">{pick(s.title)}</span>
                    <span className="mt-2 text-[15px] leading-relaxed text-white/80">{pick(s.text)}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-light">
                      {t.services.explore}
                      <ArrowRightIcon
                        className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                        aria-hidden="true" />
                      
                    </span>
                  </span>
                </a>
              </motion.li>);

          })}
        </motion.ul>
      </div>
    </section>);

}