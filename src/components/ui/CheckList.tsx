import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { PlaceholderText } from './PlaceholderText';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';

type CheckListProps = {items: string[];tone?: 'light' | 'dark';columns?: 1 | 2;};

export function CheckList({ items, tone = 'light', columns = 1 }: CheckListProps) {
  return (
    <motion.ul
      variants={stagger(0.04)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`grid gap-3 ${columns === 2 ? 'md:grid-cols-2' : ''}`}>
      
      {items.map((item) =>
      <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
          <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          tone === 'dark' ? 'bg-gold text-ink' : 'bg-primary-light text-primary-dark'}`
          }>
          
            <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className={tone === 'dark' ? 'text-white/90' : 'text-ink/80'}>
            <PlaceholderText text={item} />
          </span>
        </motion.li>
      )}
    </motion.ul>);

}