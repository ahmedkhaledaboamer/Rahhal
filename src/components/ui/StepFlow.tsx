import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Step } from '../../data/steps';
import { PlaceholderText } from './PlaceholderText';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';

type StepFlowProps = {steps: Step[];tone?: 'light' | 'dark';};

/** Numbered sequential steps joined by a line that draws as the user scrolls. */
export function StepFlow({ steps, tone = 'light' }: StepFlowProps) {
  const { pick, isRTL } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const dark = tone === 'dark';
  const cols = steps.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';

  return (
    <motion.ol
      ref={ref}
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`relative grid gap-8 lg:gap-6 ${cols}`}>
      
      {/* Horizontal track (desktop) */}
      <div aria-hidden="true" className="absolute inset-x-[10%] top-8 hidden h-0.5 lg:block">
        <div className={`absolute inset-0 rounded-full ${dark ? 'bg-white/15' : 'bg-primary/15'}`} />
        <motion.div
          className="absolute inset-0 rounded-full bg-gold"
          style={{ scaleX: progress, transformOrigin: isRTL ? 'right' : 'left' }} />
        
      </div>
      {/* Vertical track (mobile) */}
      <div aria-hidden="true" className="absolute bottom-8 start-8 top-8 w-0.5 lg:hidden">
        <div className={`absolute inset-0 rounded-full ${dark ? 'bg-white/15' : 'bg-primary/15'}`} />
        <motion.div className="absolute inset-0 origin-top rounded-full bg-gold" style={{ scaleY: progress }} />
      </div>

      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <motion.li key={step.id} variants={fadeUp} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
            <div className="relative z-10 shrink-0">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ring-4 ${
                dark ? 'bg-primary-deep text-gold-light ring-primary-dark' : 'bg-white text-primary-dark shadow-soft ring-cloud'}`
                }>
                
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <span className="absolute -end-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-extrabold text-ink">
                <bdi dir="ltr">{i + 1}</bdi>
              </span>
            </div>
            <div className="pt-1 lg:pt-0">
              <h3 className={`text-lg font-extrabold ${dark ? 'text-white' : 'text-ink'}`}>{pick(step.title)}</h3>
              <p className={`mt-1.5 text-[15px] ${dark ? 'text-white/75' : 'text-ink/70'}`}>
                <PlaceholderText text={pick(step.text)} />
              </p>
            </div>
          </motion.li>);

      })}
    </motion.ol>);

}