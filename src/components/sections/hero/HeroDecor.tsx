import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CloudIcon, MoonIcon, PlaneIcon } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

/** Slow ambient airplane, cloud and gold crescent motion on the hero. */
export function HeroDecor() {
  const reduce = useReducedMotion();
  const { sign } = useLanguage();
  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <motion.div
        className="absolute end-[12%] top-[22%] text-white/80"
        animate={{ x: [0, 40 * sign, 0], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}>
        
        <PlaneIcon className="h-10 w-10 drop-shadow-lg ltr:rotate-0 rtl:-scale-x-100" strokeWidth={1.4} />
      </motion.div>
      <motion.div
        className="absolute end-[26%] top-[34%] text-white/25"
        animate={{ x: [0, -30 * sign, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}>
        
        <CloudIcon className="h-24 w-24" strokeWidth={1} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute end-[6%] top-[46%] text-white/15"
        animate={{ x: [0, 24 * sign, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}>
        
        <CloudIcon className="h-36 w-36" strokeWidth={1} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute end-[18%] top-[14%] text-gold-light"
        animate={{ rotate: [0, 8, 0], y: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
        
        <MoonIcon className="h-9 w-9 drop-shadow-[0_0_12px_rgba(242,213,126,0.5)]" strokeWidth={1.6} />
      </motion.div>
    </div>);

}