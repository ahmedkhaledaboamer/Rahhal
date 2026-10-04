import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { FloatingButtons } from '../components/layout/FloatingButtons';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { IntroLoader } from '../components/layout/IntroLoader';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ExtraServices } from '../components/sections/ExtraServices';
import { Gallery } from '../components/sections/Gallery';
import { Hero } from '../components/sections/hero/Hero';
import { HowToBook } from '../components/sections/HowToBook';
import { Inquiry } from '../components/sections/Inquiry';
import { MapSection } from '../components/sections/MapSection';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Visas } from '../components/sections/Visas';
import { WhyRahhal } from '../components/sections/WhyRahhal';
import { Trips } from '../components/trips/Trips';

export function Home() {
  const { t, switching } = useLanguage();
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-cloud font-sans text-ink">
      <a
        href="#main"
        className="sr-only z-[110] rounded-full bg-gold px-5 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4">
        
        {t.a11y.skip}
      </a>
      <IntroLoader />
      <motion.div
        animate={{ opacity: switching ? 0 : 1 }}
        transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}>
        
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Services />
          <Trips />
          <Visas />
          <WhyRahhal />
          <ExtraServices />
          <HowToBook />
          <Testimonials />
          <Gallery />
          <CtaBanner />
          <MapSection />
          <Inquiry />
          <Contact />
        </main>
        <Footer />
      </motion.div>
      <FloatingButtons />
      <ScrollToTop />
    </div>);

}