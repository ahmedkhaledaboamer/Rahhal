import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { whyFeatures } from '../../data/features';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { SectionTitle } from '../ui/SectionTitle';
import { SmartImage } from '../ui/SmartImage';

export function WhyRahhal() {
  const { t, pick, lang } = useLanguage();
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="bg-pattern absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle id="why-title" title={t.why.title} align="start" />
          <SmartImage
            src={images.familyTravel}
            alt={lang === 'ar' ? 'عائلة مسافرة في المطار' : 'A family traveling through an airport'}
            aspect="aspect-[4/3]"
            className="mt-10 hidden rounded-3xl shadow-lift lg:block" />
          
        </div>
        <motion.ul
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          
          {whyFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <motion.li key={f.id} variants={fadeUp} className="group border-t border-ink/10 pt-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-dark shadow-soft ring-1 ring-ink/5 transition-[background-color,color,transform] duration-200 ease-brand group-hover:-translate-y-0.5 group-hover:bg-primary-dark group-hover:text-gold-light">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-ink">{pick(f.title)}</h3>
                <p className="mt-2 text-ink/70">{pick(f.text)}</p>
              </motion.li>);

          })}
        </motion.ul>
      </div>
    </section>);

}