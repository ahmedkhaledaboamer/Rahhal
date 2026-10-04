import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { InquiryPrefill, IntlTab, TripTab } from '../types/booking';
import { scrollToSection } from '../utils/scroll';

type BookingContextValue = {
  prefill: InquiryPrefill;
  /** Increments every time a new prefill is pushed, so the form can react. */
  prefillVersion: number;
  openInquiry: (prefill?: InquiryPrefill) => void;
  tripTab: TripTab;
  setTripTab: (tab: TripTab) => void;
  intlTab: IntlTab;
  setIntlTab: (tab: IntlTab) => void;
  goToTrips: (tab: TripTab, intl?: IntlTab) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: {children: React.ReactNode;}) {
  const [prefill, setPrefill] = useState<InquiryPrefill>({});
  const [prefillVersion, setPrefillVersion] = useState(0);
  const [tripTab, setTripTab] = useState<TripTab>('domestic');
  const [intlTab, setIntlTab] = useState<IntlTab>('gulf');

  const openInquiry = useCallback((next?: InquiryPrefill) => {
    if (next) {
      setPrefill(next);
      setPrefillVersion((v) => v + 1);
    }
    scrollToSection('inquiry');
  }, []);

  const goToTrips = useCallback((tab: TripTab, intl?: IntlTab) => {
    setTripTab(tab);
    if (intl) setIntlTab(intl);
    scrollToSection('trips');
  }, []);

  const value = useMemo(
    () => ({ prefill, prefillVersion, openInquiry, tripTab, setTripTab, intlTab, setIntlTab, goToTrips }),
    [prefill, prefillVersion, openInquiry, tripTab, intlTab, goToTrips]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
  return ctx;
}