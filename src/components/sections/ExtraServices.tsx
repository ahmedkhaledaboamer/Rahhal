import { m } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { extraServices } from '../../data/features';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { SectionTitle } from '../ui/SectionTitle';

export function ExtraServices() {
  const { t, pick } = useLanguage();
  return (
    <section aria-labelledby="extra-title" className="relative overflow-hidden bg-primary-dark py-24 lg:py-28">
      <div aria-hidden="true" className="bg-pattern-dark absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="extra-title" title={t.extra.title} tone="dark" />
        <m.ul
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          
          {extraServices.map((s) => {
            const Icon = s.icon;
            return (
              <m.li key={s.id} variants={fadeUp} className="flex items-start gap-4 bg-primary-dark p-6 lg:flex-col lg:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-light ring-1 ring-gold/30">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-[15px] font-semibold leading-relaxed text-white/90">{pick(s.text)}</p>
              </m.li>);

          })}
        </m.ul>
      </div>
    </section>);

}