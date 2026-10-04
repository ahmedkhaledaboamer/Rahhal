import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import type { Program } from '../../data/international';
import { fadeUp } from '../../utils/motion';
import { inquiryWhatsappLink } from '../../utils/whatsapp';
import { SmartImage } from '../ui/SmartImage';

/** Image card for a sample tour program; whole card opens a WhatsApp quote request. */
export function ProgramCard({ program }: {program: Program;}) {
  const { t, pick, lang } = useLanguage();
  return (
    <motion.li variants={fadeUp}>
      <a
        href={inquiryWhatsappLink(lang, pick(program.title))}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-soft transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 motion-reduce:hover:translate-y-0 sm:aspect-[3/4]">
        
        <SmartImage src={images[program.image]} alt="" className="absolute inset-0" zoomOnHover />
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 flex flex-col p-5">
          <span className="text-lg font-extrabold text-white">{pick(program.title)}</span>
          <span className="mt-1 text-sm text-white/80">{pick(program.text)}</span>
          <span className="mt-4 inline-flex w-fit items-center rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold text-ink">
            {t.trips.common.requestQuote}
          </span>
        </span>
      </a>
    </motion.li>);

}