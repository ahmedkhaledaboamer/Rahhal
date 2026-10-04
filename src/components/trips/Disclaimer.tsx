import React from 'react';
import { InfoIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Disclaimer({ text }: {text: string;}) {
  const { t } = useLanguage();
  return (
    <aside className="flex gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5 md:p-6">
      <InfoIcon className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
      <p className="text-[15px] text-ink/80">
        <strong className="font-bold text-ink">{t.trips.international.noteLabel}: </strong>
        {text}
      </p>
    </aside>);

}