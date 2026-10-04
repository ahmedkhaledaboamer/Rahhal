import { useState } from 'react';
import { responsiveSrcSet } from '../../utils/srcset';

type SmartImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/3]". Omit when the parent sizes the box. */
  aspect?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  zoomOnHover?: boolean;
  /** Rendered width hint for picking the right file from the srcSet. */
  sizes?: string;
};

/** Lazy, responsive image in an aspect-ratio box that fades in once loaded (opacity only, so it stays on the GPU). */
export function SmartImage({
  src,
  alt,
  aspect,
  className = '',
  imgClassName = '',
  eager = false,
  zoomOnHover = false,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  // `relative` would override a caller's `absolute` (it comes later in Tailwind's CSS) and collapse the box.
  const position = /(^|\s)absolute(\s|$)/.test(className) ? '' : 'relative';
  return (
    <div className={`${position} overflow-hidden bg-primary-light ${aspect ?? ''} ${className}`}>
      <img
        src={src}
        srcSet={responsiveSrcSet(src)}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-300 ease-brand ${
        loaded ? 'opacity-100' : 'opacity-0'} ${
        zoomOnHover ? 'group-hover:scale-[1.05] motion-reduce:group-hover:scale-100' : ''} ${imgClassName}`} />

    </div>);

}
