import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { FaqAccordion } from '../inquiry/FaqAccordion';
import { InquiryForm } from '../inquiry/InquiryForm';
import { Button } from '../ui/Button';
import { PlaceholderText } from '../ui/PlaceholderText';
import { Reveal } from '../ui/Reveal';
import { SectionTitle } from '../ui/SectionTitle';

export function Inquiry() {
  const { t, lang } = useLanguage();
  return (
    <section id="inquiry" aria-labelledby="inquiry-title" className="relative overflow-hidden bg-primary-light/60 py-24 lg:py-32">
      <div aria-hidden="true" className="bg-pattern absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="inquiry-title" title={t.inquiry.title} subtitle={<PlaceholderText text={t.inquiry.intro} />} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          <Reveal>
            <InquiryForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05} className="flex flex-col items-start gap-4 rounded-3xl bg-dome p-6 text-white shadow-lift sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-extrabold">{t.inquiry.altTitle}</p>
              <Button variant="light" href={inquiryWhatsappLink(lang)} external icon={<WhatsAppIcon className="h-5 w-5 text-dome" />}>
                {t.inquiry.whatsappAlt}
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mb-5 text-2xl font-extrabold text-ink">{t.inquiry.faqTitle}</h3>
              <FaqAccordion />
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}