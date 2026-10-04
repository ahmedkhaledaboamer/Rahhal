import React from 'react';
import { MotionConfig } from 'framer-motion';
import { BookingProvider } from './contexts/BookingContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';

export function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <MotionConfig reducedMotion="user">
          <Home />
        </MotionConfig>
      </BookingProvider>
    </LanguageProvider>);

}