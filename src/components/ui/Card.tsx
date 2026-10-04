import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Interactive cards lift on hover; static cards stay still. */
  interactive?: boolean;
  as?: 'div' | 'article' | 'li';
};

export function Card({ children, className = '', interactive = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-soft ${
      interactive ?
      'group transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-1 hover:shadow-lift motion-reduce:hover:translate-y-0' :
      ''} ${
      className}`}>
      
      {children}
    </Tag>);

}