import { CloudIcon, MoonIcon, PlaneIcon } from 'lucide-react';

/**
 * Slow ambient airplane, cloud and gold crescent motion on the hero.
 * Pure CSS keyframes (see index.css `.hero-float-*`) so they run on the compositor, not the main thread;
 * the global reduced-motion rule in index.css stops them for users who ask for less motion.
 */
export function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <div className="hero-float-plane absolute end-[12%] top-[22%] text-white/80">
        <PlaneIcon className="h-10 w-10 drop-shadow-lg ltr:rotate-0 rtl:-scale-x-100" strokeWidth={1.4} />
      </div>
      <div className="hero-float-cloud-a absolute end-[26%] top-[34%] text-white/25">
        <CloudIcon className="h-24 w-24" strokeWidth={1} fill="currentColor" />
      </div>
      <div className="hero-float-cloud-b absolute end-[6%] top-[46%] text-white/15">
        <CloudIcon className="h-36 w-36" strokeWidth={1} fill="currentColor" />
      </div>
      <div className="hero-float-moon absolute end-[18%] top-[14%] text-gold-light">
        <MoonIcon className="h-9 w-9 drop-shadow-[0_0_12px_rgba(242,213,126,0.5)]" strokeWidth={1.6} />
      </div>
    </div>);

}
