import React from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { GlobeIcon, MoonIcon, TreePalmIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { TripTab } from '../../types/booking';
import { EASE_OUT } from '../../utils/motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Tabs, type TabItem } from '../ui/Tabs';
import { DomesticTrips } from './DomesticTrips';
import { InternationalTrips } from './InternationalTrips';
import { UmrahHajj } from './UmrahHajj';

const order: TripTab[] = ['domestic', 'international', 'umrah'];

export function Trips() {
  const { t, sign } = useLanguage();
  const { tripTab, setTripTab } = useBooking();
  const [direction, setDirection] = React.useState(1);

  const items: TabItem<TripTab>[] = [
  { id: 'domestic', label: t.trips.tabs.domestic, icon: <TreePalmIcon className="h-4 w-4" aria-hidden="true" /> },
  { id: 'international', label: t.trips.tabs.international, icon: <GlobeIcon className="h-4 w-4" aria-hidden="true" /> },
  { id: 'umrah', label: t.trips.tabs.umrah, icon: <MoonIcon className="h-4 w-4" aria-hidden="true" /> }];


  const change = (next: TripTab) => {
    setDirection(order.indexOf(next) > order.indexOf(tripTab) ? 1 : -1);
    setTripTab(next);
  };

  return (
    <section id="trips" aria-labelledby="trips-title" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="bg-pattern absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="trips-title" title={t.trips.title} />
        <div className="mt-10 flex justify-center">
          <Tabs items={items} value={tripTab} onChange={change} label={t.trips.tabsLabel} idPrefix="trips" />
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={tripTab}
              role="tabpanel"
              id={`trips-panel-${tripTab}`}
              aria-labelledby={`trips-tab-${tripTab}`}
              tabIndex={0}
              initial={{ opacity: 0, x: 28 * direction * sign }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 * direction * sign }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="focus:outline-none">
              
              {tripTab === 'domestic' && <DomesticTrips />}
              {tripTab === 'international' && <InternationalTrips />}
              {tripTab === 'umrah' && <UmrahHajj />}
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}