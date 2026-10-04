import type { Variants } from 'framer-motion';

export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.77, 0, 0.175, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_OUT } }
};

export function stagger(each = 0.05, delay = 0): Variants {
  return { hidden: {}, show: { transition: { staggerChildren: each, delayChildren: delay } } };
}

export const viewportOnce = { once: true, amount: 0.15 } as const;