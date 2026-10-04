import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CompassIcon, EyeIcon, FileTextIcon, GemIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { companyValues } from '../../data/values';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { scrollToSection } from '../../utils/scroll';
import { Button } from '../ui/Button';
import { PlaceholderText } from '../ui/PlaceholderText';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';
import { SmartImage } from '../ui/SmartImage';

export function About() {
  const { t, pick, lang, sign } = useLanguage();
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="bg-pattern absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Collage */}
          <Reveal x={-32 * sign} y={0} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="grid grid-cols-5 grid-rows-6 gap-4" style={{ aspectRatio: '1 / 1.05' }}>
              <SmartImage
                src={images.airport}
                alt={lang === 'ar' ? 'مسافر في صالة المطار' : 'A traveler in an airport terminal'}
                className="col-span-3 row-span-6 rounded-3xl shadow-lift" />
              
              <SmartImage
                src={images.planeWindow}
                alt={lang === 'ar' ? 'جواز سفر بجوار نافذة الطائرة' : 'Passport beside an airplane window'}
                className="col-span-2 row-span-3 rounded-3xl shadow-soft" />
              
              <SmartImage
                src={images.heroRedSea}
                alt={lang === 'ar' ? 'ساحل البحر الأحمر' : 'The Red Sea coast'}
                className="col-span-2 row-span-3 rounded-3xl shadow-soft" />
              
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="absolute -bottom-6 start-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-glass backdrop-blur-xl sm:start-10">
              
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-ink">
                <GemIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xl font-extrabold text-primary-dark">
                  <PlaceholderText text={t.about.experienceBadge} />
                </p>
                <p className="text-xs text-ink/65">{t.about.experienceLabel}</p>
              </div>
            </motion.div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionTitle id="about-title" title={t.about.title} align="start" />
            <Reveal delay={0.05} className="mt-8 space-y-5 text-[17px] text-ink/75">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <p className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink/80 shadow-soft ring-1 ring-ink/5">
                <FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                <PlaceholderText text={t.about.license} />
              </p>
            </Reveal>
          </div>
        </div>

        {/* Vision / Mission / Values */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-24 grid gap-6 lg:grid-cols-[1fr_1fr_1.6fr]">
          
          <motion.article variants={fadeUp} className="rounded-3xl bg-primary-dark p-8 text-white shadow-lift">
            <EyeIcon className="h-8 w-8 text-gold-light" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-extrabold">{t.about.visionTitle}</h3>
            <p className="mt-3 text-white/80">{t.about.vision}</p>
          </motion.article>
          <motion.article variants={fadeUp} className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5">
            <CompassIcon className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-extrabold text-ink">{t.about.missionTitle}</h3>
            <p className="mt-3 text-ink/70">{t.about.mission}</p>
          </motion.article>
          <motion.article variants={fadeUp} className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5">
            <h3 className="text-xl font-extrabold text-ink">{t.about.valuesTitle}</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {companyValues.map((v) => {
                const Icon = v.icon;
                return (
                  <li key={v.id} className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold text-ink">{pick(v.title)}</p>
                      <p className="text-sm text-ink/65">{pick(v.text)}</p>
                    </div>
                  </li>);

              })}
            </ul>
          </motion.article>
        </motion.div>

        <Reveal className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('services')}
            iconEnd={<ArrowRightIcon className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />}>
            
            {t.about.cta}
          </Button>
        </Reveal>
      </div>
    </section>);

}