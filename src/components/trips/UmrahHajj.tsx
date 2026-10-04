import { FileTextIcon, LandmarkIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';
import { umrahPackages } from '../../data/umrahPackages';
import { Button } from '../ui/Button';
import { Carousel } from '../ui/Carousel';
import { CheckList } from '../ui/CheckList';
import { PlaceholderText } from '../ui/PlaceholderText';
import { Reveal } from '../ui/Reveal';
import { SmartImage } from '../ui/SmartImage';

export function UmrahHajj() {
  const { t, pick } = useLanguage();
  const { openInquiry } = useBooking();
  const u = t.trips.umrah;

  return (
    <div className="space-y-16">
      <p className="mx-auto max-w-3xl text-center text-lg text-ink/70">{u.intro}</p>

      <div>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h3 className="text-2xl font-extrabold text-ink">{u.packagesTitle}</h3>
          <p className="text-sm font-semibold text-ink/60">
            <PlaceholderText text={u.pricesNote} />
          </p>
        </div>
        <Reveal className="mt-6">
          <Carousel
            label={u.packagesTitle}
            items={umrahPackages.map((p) => {
              const Icon = p.icon;
              return (
                <article className="flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5">
                  <div className="relative">
                    <SmartImage src={images[p.image]} alt="" aspect="aspect-[4/3]" />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <span className="absolute -bottom-6 start-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-ink shadow-gold">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 pt-9">
                    <h4 className="text-lg font-extrabold text-ink">{pick(p.name)}</h4>
                    <dl className="mt-3 space-y-3 text-sm">
                      <div>
                        <dt className="font-bold text-primary-dark">{u.suitedFor}</dt>
                        <dd className="text-ink/70">{pick(p.suitedFor)}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-primary-dark">{u.features}</dt>
                        <dd className="text-ink/70">{pick(p.features)}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto pt-5">
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        onClick={() => openInquiry({ service: 'umrah', destination: `${t.trips.tabs.umrah} – ${pick(p.name)}` })}>

                        {u.quote}
                      </Button>
                    </div>
                  </div>
                </article>);

            })} />
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5 md:p-10">
          <h3 className="text-xl font-extrabold text-ink">{u.includesTitle}</h3>
          <div className="mt-6">
            <CheckList items={u.includes} />
          </div>
        </Reveal>
        <Reveal delay={0.06} className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-ink/5 md:p-10">
          <h3 className="text-xl font-extrabold text-ink">{u.docsTitle}</h3>
          <div className="mt-6">
            <CheckList items={u.docs} />
          </div>
        </Reveal>
      </div>

      <Reveal className="relative overflow-hidden rounded-3xl bg-primary-deep text-white shadow-lift">
        <div className="grid lg:grid-cols-[1fr_1.4fr]">
          <SmartImage src={images.madinah} alt={pick({ ar: 'المسجد النبوي في المدينة المنورة', en: "The Prophet's Mosque in Madinah" })} aspect="aspect-[16/10] lg:aspect-auto" className="lg:h-full" />
          <div className="relative p-8 md:p-12">
            <div aria-hidden="true" className="bg-pattern-dark absolute inset-0" />
            <div className="relative">
              <LandmarkIcon className="h-9 w-9 text-gold-light" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-extrabold">{u.hajjTitle}</h3>
              <p className="mt-3 text-white/80">{u.hajjText}</p>
              <p className="mt-6 inline-flex items-start gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90">
                <FileTextIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                <span>
                  <PlaceholderText text={u.license} />
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" size="lg" onClick={() => openInquiry({ service: 'umrah' })}>
                  {u.book}
                </Button>
                <Button variant="glass" size="lg" onClick={() => openInquiry({ service: 'hajj' })}>
                  {u.hajjCta}
                </Button>
                <Button variant="glass" size="lg" onClick={() => openInquiry({ service: 'umrah' })}>
                  {u.quote}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>);

}