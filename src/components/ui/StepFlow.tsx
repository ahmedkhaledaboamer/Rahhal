import { useRef } from 'react';
import { m } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Step } from '../../data/steps';
import { useScrollFrame } from '../../hooks/useScrollFrame';
import { PlaceholderText } from './PlaceholderText';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';

type StepFlowProps = {steps: Step[];tone?: 'light' | 'dark';};

/** Numbered sequential steps joined by a line that draws as the user scrolls. */
export function StepFlow({ steps, tone = 'light' }: StepFlowProps) {
  const { pick, isRTL } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const barX = useRef<HTMLDivElement>(null);
  const barY = useRef<HTMLDivElement>(null);

  // 0 when the list's top reaches 85% of the viewport, 1 when its bottom reaches 55%.
  useScrollFrame(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (0.85 * vh - r.top) / (r.height + 0.3 * vh)));
    if (barX.current) barX.current.style.transform = `scaleX(${p})`;
    if (barY.current) barY.current.style.transform = `scaleY(${p})`;
  }, ref);
  const dark = tone === 'dark';
  const cols = steps.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';

  return (
    <m.ol
      ref={ref}
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`relative grid gap-8 lg:gap-6 ${cols}`}>
      
      {/* Horizontal track (desktop) */}
      <div aria-hidden="true" className="absolute inset-x-[10%] top-8 hidden h-0.5 lg:block">
        <div className={`absolute inset-0 rounded-full ${dark ? 'bg-white/15' : 'bg-primary/15'}`} />
        <div
          ref={barX}
          className="absolute inset-0 rounded-full bg-gold transition-transform duration-150 ease-out"
          style={{ transform: 'scaleX(0)', transformOrigin: isRTL ? 'right' : 'left' }} />
        
      </div>
      {/* Vertical track (mobile) */}
      <div aria-hidden="true" className="absolute bottom-8 start-8 top-8 w-0.5 lg:hidden">
        <div className={`absolute inset-0 rounded-full ${dark ? 'bg-white/15' : 'bg-primary/15'}`} />
        <div ref={barY} className="absolute inset-0 origin-top rounded-full bg-gold transition-transform duration-150 ease-out" style={{ transform: 'scaleY(0)' }} />
      </div>

      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <m.li key={step.id} variants={fadeUp} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
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
          </m.li>);

      })}
    </m.ol>);

}