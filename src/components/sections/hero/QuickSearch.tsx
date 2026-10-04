import React, { useId, useMemo, useState } from 'react';
import { m } from 'framer-motion';
import { CalendarIcon, ChevronDownIcon, MapPinIcon, SearchIcon, ShapesIcon } from 'lucide-react';
import { useBooking } from '../../../contexts/BookingContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import { destinations } from '../../../data/destinations';
import { europeDestinations, gulfCountries } from '../../../data/international';
import type { InquiryServiceId } from '../../../types/booking';
import { EASE_OUT } from '../../../utils/motion';
import { Button } from '../../ui/Button';

type SearchService = 'domestic' | 'international' | 'umrah' | 'visa';
const serviceOrder: SearchService[] = ['domestic', 'international', 'umrah', 'visa'];
const toInquiryService: Record<SearchService, InquiryServiceId | ''> = {
  domestic: 'domestic',
  international: 'international',
  umrah: 'umrah',
  visa: ''
};

export function QuickSearch() {
  const { t, pick } = useLanguage();
  const { openInquiry } = useBooking();
  const uid = useId();
  const [service, setService] = useState<SearchService | ''>('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const today = new Date().toISOString().slice(0, 10);

  const suggestions = useMemo(() => {
    const domestic = destinations.map((d) => pick(d.name));
    const abroad = [...gulfCountries, ...europeDestinations].map((c) => pick(c.name));
    if (service === 'domestic') return domestic;
    if (service === 'international' || service === 'visa') return abroad;
    if (service === 'umrah') return [pick({ ar: 'مكة المكرمة', en: 'Makkah' }), pick({ ar: 'المدينة المنورة', en: 'Madinah' })];
    return [...domestic, ...abroad];
  }, [service, pick]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const visaPrefix = service === 'visa' ? `${t.search.options.visa}: ` : '';
    openInquiry({
      service: service ? toInquiryService[service] : '',
      destination: destination ? `${visaPrefix}${destination}` : visaPrefix.replace(': ', ''),
      date
    });
  };

  const fieldWrap =
  'group relative flex items-center gap-3 rounded-2xl bg-white px-4 py-2.5 ring-1 ring-ink/5 transition-shadow duration-200 focus-within:ring-2 focus-within:ring-gold';
  const labelCls = 'block text-[11px] font-bold text-primary-dark';
  const inputCls = 'w-full bg-transparent text-[15px] font-semibold text-ink placeholder:text-ink/40 focus:outline-none';

  return (
    <m.form
      onSubmit={onSubmit}
      aria-label={t.search.label}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.55 }}
      className="grid gap-2 rounded-3xl border border-white/30 bg-white/15 p-2 shadow-glass backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr_auto]">
      
      <div className={fieldWrap}>
        <ShapesIcon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <label htmlFor={`${uid}-service`} className={labelCls}>
            {t.search.service}
          </label>
          <div className="relative">
            <select
              id={`${uid}-service`}
              value={service}
              onChange={(e) => setService(e.target.value as SearchService | '')}
              className={`${inputCls} appearance-none pe-6`}>
              
              <option value="">{t.search.servicePlaceholder}</option>
              {serviceOrder.map((s) =>
              <option key={s} value={s}>
                  {t.search.options[s]}
                </option>
              )}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute end-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={fieldWrap}>
        <MapPinIcon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <label htmlFor={`${uid}-dest`} className={labelCls}>
            {t.search.destination}
          </label>
          <input
            id={`${uid}-dest`}
            list={`${uid}-dest-list`}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={t.search.destinationPlaceholder}
            className={inputCls}
            autoComplete="off" />
          
          <datalist id={`${uid}-dest-list`}>
            {suggestions.map((s) =>
            <option key={s} value={s} />
            )}
          </datalist>
        </div>
      </div>

      <div className={fieldWrap}>
        <CalendarIcon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <label htmlFor={`${uid}-date`} className={labelCls}>
            {t.search.date}
          </label>
          <input
            id={`${uid}-date`}
            type="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputCls} min-h-[24px]`} />
          
        </div>
      </div>

      <Button type="submit" variant="gold" size="lg" fullWidth className="!h-full min-h-[56px] !rounded-2xl" icon={<SearchIcon className="h-5 w-5" aria-hidden="true" />}>
        {t.search.submit}
      </Button>
    </m.form>);

}