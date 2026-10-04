import { useState } from 'react';
import { m } from 'framer-motion';
import { ExpandIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { galleryItems } from '../../data/gallery';
import { images } from '../../data/images';
import { fadeUp, stagger } from '../../utils/motion';
import { Lightbox } from '../ui/Lightbox';
import { SectionTitle } from '../ui/SectionTitle';
import { SmartImage } from '../ui/SmartImage';

const ratioClass = { tall: 'aspect-[3/4]', wide: 'aspect-[4/3]', square: 'aspect-square' };

export function Gallery() {
  const { t, pick } = useLanguage();
  const [index, setIndex] = useState<number | null>(null);
  const lightboxImages = galleryItems.map((g) => ({ src: images[g.key], alt: pick(g.alt) }));

  return (
    <section aria-labelledby="gallery-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="gallery-title" title={t.gallery.title} />
        <m.ul
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          
          {galleryItems.map((g, i) =>
          <m.li key={g.key} variants={fadeUp} className="mb-3 break-inside-avoid md:mb-4">
              <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.a11y.openImage}: ${pick(g.alt)}`}
              className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60">
              
                <SmartImage src={images[g.key]} alt={pick(g.alt)} aspect={ratioClass[g.ratio]} zoomOnHover />
                <span
                aria-hidden="true"
                className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                
                  <span className="text-start text-sm font-bold text-white">{pick(g.alt)}</span>
                  <ExpandIcon className="h-5 w-5 shrink-0 text-gold-light" />
                </span>
              </button>
            </m.li>
          )}
        </m.ul>
      </div>
      <Lightbox images={lightboxImages} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </section>);

}