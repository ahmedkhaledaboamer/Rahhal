import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { bookingSteps } from '../../data/steps';
import { SectionTitle } from '../ui/SectionTitle';
import { StepFlow } from '../ui/StepFlow';

export function HowToBook() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="howto-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="howto-title" title={t.howToBook.title} subtitle={t.howToBook.subtitle} />
        <div className="mt-16">
          <StepFlow steps={bookingSteps} />
        </div>
      </div>
    </section>);

}