import React, { useState } from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/3]". Omit when the parent sizes the box. */
  aspect?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  zoomOnHover?: boolean;
};

/** Lazy image with an aspect-ratio box and a blur-up reveal once loaded. */
export function SmartImage({
  src,
  alt,
  aspect,
  className = '',
  imgClassName = '',
  eager = false,
  zoomOnHover = false
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-primary-light ${aspect ?? ''} ${className}`}>
      {!loaded && <div aria-hidden="true" className="img-skeleton absolute inset-0 bg-primary/10" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-[filter,opacity,transform] duration-300 ease-brand ${
        loaded ? 'opacity-100 blur-0' : 'scale-105 opacity-0 blur-lg'} ${
        zoomOnHover ? 'group-hover:scale-[1.05] motion-reduce:group-hover:scale-100' : ''} ${imgClassName}`} />
      
    </div>);

}