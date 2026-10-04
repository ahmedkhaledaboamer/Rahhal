import { useEffect } from 'react';
import { Footer } from '../components/layout/Footer';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ExtraServices } from '../components/sections/ExtraServices';
import { Gallery } from '../components/sections/Gallery';
import { HowToBook } from '../components/sections/HowToBook';
import { Inquiry } from '../components/sections/Inquiry';
import { MapSection } from '../components/sections/MapSection';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Visas } from '../components/sections/Visas';
import { WhyRahhal } from '../components/sections/WhyRahhal';
import { Trips } from '../components/trips/Trips';
import { settleOnSection } from '../utils/scroll';

/** Everything after the hero. Loaded as its own chunk so the first screen paints without it. */
export default function BelowFold() {
  // The browser tried to jump to a #hash before these sections existed; do it now that they do.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    el.scrollIntoView({ block: 'start' });
    settleOnSection(el);
  }, []);

  return (
    <>
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
    </>);

}

export { Footer };
