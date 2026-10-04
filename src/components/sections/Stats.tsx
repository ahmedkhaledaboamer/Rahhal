import { useEffect, useRef, useState } from 'react';
import { animate, m, useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { stats, type Stat } from '../../data/stats';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { PlaceholderText } from '../ui/PlaceholderText';

export function Stats() {
  const { t } = useLanguage();
  return (
    <section aria-label={t.stats.label} className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <m.ul
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-ink/5 lg:grid-cols-4">
        
        {stats.map((s, i) =>
        <StatItem key={s.id} stat={s} index={i} />
        )}
      </m.ul>
    </section>);

}

function StatItem({ stat, index }: {stat: Stat;index: number;}) {
  const { pick } = useLanguage();
  const Icon = stat.icon;
  const borders = [
  'border-b border-ink/5 lg:border-b-0',
  'border-b border-s border-ink/5 lg:border-b-0',
  'border-ink/5 lg:border-s',
  'border-s border-ink/5'][
  index];
  return (
    <m.li variants={fadeUp} className={`flex flex-col items-center gap-3 px-4 py-7 text-center sm:flex-row sm:text-start md:px-8 ${borders}`}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary-dark">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-2xl font-extrabold text-primary-dark md:text-3xl">
          {stat.value === null ?
          <bdi dir="ltr">
              <PlaceholderText text={stat.placeholder} />
            </bdi> :

          <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          }
          {stat.unit && <span className="ms-1.5 text-lg font-bold">{pick(stat.unit)}</span>}
        </p>
        <p className="mt-0.5 text-sm text-ink/65">{pick(stat.label)}</p>
      </div>
    </m.li>);

}

function CountUp({ value, prefix = '', suffix = '' }: {value: number;prefix?: string;suffix?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <bdi ref={ref} dir="ltr">
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </bdi>);

}