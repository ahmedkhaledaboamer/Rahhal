import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { BookingProvider } from './contexts/BookingContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';

export function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        {/* `m` components + domAnimation only: no layout/drag engine, much smaller bundle. */}
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            <Home />
          </MotionConfig>
        </LazyMotion>
      </BookingProvider>
    </LanguageProvider>);

}