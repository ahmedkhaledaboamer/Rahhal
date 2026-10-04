import React from 'react';
import { ArrowRightIcon, FileCheckIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { visaSteps } from '../../data/steps';
import { Button } from '../ui/Button';
import { CheckList } from '../ui/CheckList';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';
import { SmartImage } from '../ui/SmartImage';
import { StepFlow } from '../ui/StepFlow';

export function Visas() {
  const { t } = useLanguage();
  const { openInquiry } = useBooking();

  return (
    <section id="visas" aria-labelledby="visas-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="visas-title" title={t.visas.title} subtitle={t.visas.intro} />

        <div className="mt-16">
          <h3 className="mb-10 text-center text-xl font-extrabold text-primary-dark">{t.visas.stepsTitle}</h3>
          <StepFlow steps={visaSteps} />
        </div>

        <div className="mt-20 grid overflow-hidden rounded-3xl bg-cloud ring-1 ring-ink/5 lg:grid-cols-[1fr_1.25fr]">
          <SmartImage
            src={images.heroPassport}
            alt={t.visas.docsTitle}
            aspect="aspect-[16/10] lg:aspect-auto"
            className="lg:h-full" />
          
          <Reveal className="p-8 md:p-12">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-dark text-gold-light">
                <FileCheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-extrabold text-ink">{t.visas.docsTitle}</h3>
                <p className="text-sm text-ink/60">{t.visas.docsNote}</p>
              </div>
            </div>
            <div className="mt-7">
              <CheckList items={t.visas.docs} />
            </div>
            <div className="mt-9">
              <Button
                variant="gold"
                size="lg"
                onClick={() => openInquiry({ service: '' })}
                iconEnd={<ArrowRightIcon className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />}>
                
                {t.visas.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}