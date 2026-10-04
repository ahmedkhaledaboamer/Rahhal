import { AnimatePresence, m } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { IntlTab } from '../../types/booking';
import { EASE_OUT } from '../../utils/motion';
import { Tabs } from '../ui/Tabs';
import { EuropePanel } from './EuropePanel';
import { GulfPanel } from './GulfPanel';

export function InternationalTrips() {
  const { t, sign } = useLanguage();
  const { intlTab, setIntlTab } = useBooking();

  return (
    <div>
      <p className="mx-auto max-w-3xl text-center text-lg text-ink/70">{t.trips.international.intro}</p>
      <div className="mt-8 flex justify-center">
        <Tabs<IntlTab>
          variant="pill"
          items={[
          { id: 'gulf', label: t.trips.international.subTabs.gulf },
          { id: 'europe', label: t.trips.international.subTabs.europe }]
          }
          value={intlTab}
          onChange={setIntlTab}
          label={t.trips.international.subTabsLabel}
          idPrefix="intl" />
        
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={intlTab}
          role="tabpanel"
          id={`intl-panel-${intlTab}`}
          aria-labelledby={`intl-tab-${intlTab}`}
          initial={{ opacity: 0, x: (intlTab === 'europe' ? 24 : -24) * sign }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE_OUT }}
          className="mt-12">
          
          {intlTab === 'gulf' ? <GulfPanel /> : <EuropePanel />}
        </m.div>
      </AnimatePresence>
    </div>);

}