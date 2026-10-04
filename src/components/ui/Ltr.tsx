import React from 'react';

/** Forces left-to-right rendering for phone numbers, emails, URLs and prices inside Arabic text. */
export function Ltr({ children, className = '' }: {children: React.ReactNode;className?: string;}) {
  return (
    <bdi dir="ltr" className={`inline-block ${className}`}>
      {children}
    </bdi>);

}