import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT, viewportOnce } from '../../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset; use `x` for side reveals (already direction-adjusted by caller). */
  y?: number;
  x?: number;
};

export function Reveal({ children, className, delay = 0, y = 22, x = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3, ease: EASE_OUT, delay }}>
      
      {children}
    </motion.div>);

}