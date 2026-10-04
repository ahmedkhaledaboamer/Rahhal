import React, { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export type TabItem<T extends string> = {id: T;label: string;icon?: React.ReactNode;};

type TabsProps<T extends string> = {
  items: TabItem<T>[];
  value: T;
  onChange: (id: T) => void;
  label: string;
  idPrefix: string;
  variant?: 'primary' | 'pill';
};

/** Accessible tablist with an animated indicator and direction-aware arrow keys. */
export function Tabs<T extends string>({ items, value, onChange, label, idPrefix, variant = 'primary' }: TabsProps<T>) {
  const { isRTL } = useLanguage();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const nextKey = isRTL ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isRTL ? 'ArrowRight' : 'ArrowLeft';
    let target = -1;
    if (e.key === nextKey) target = (i + 1) % items.length;
    if (e.key === prevKey) target = (i - 1 + items.length) % items.length;
    if (e.key === 'Home') target = 0;
    if (e.key === 'End') target = items.length - 1;
    if (target < 0) return;
    e.preventDefault();
    onChange(items[target].id);
    refs.current[target]?.focus();
  };

  const isPill = variant === 'pill';

  return (
    <div
      role="tablist"
      aria-label={label}
      className={
      isPill ?
      'inline-flex rounded-full bg-white p-1 shadow-soft ring-1 ring-ink/5' :
      'no-scrollbar mx-auto flex max-w-full gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 shadow-soft ring-1 ring-ink/5 sm:inline-flex'
      }>
      
      {items.map((item, i) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            ref={(el) => refs.current[i] = el}
            role="tab"
            type="button"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={active}
            aria-controls={`${idPrefix}-panel-${item.id}`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`relative flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
            isPill ? 'rounded-full px-5 py-2 text-sm' : 'flex-1 rounded-xl px-4 py-3 text-sm sm:px-6 sm:text-base'} ${
            active ? 'text-white' : 'text-ink/65 hover:text-primary-dark'}`}>
            
            <span
              aria-hidden="true"
              className={`absolute inset-0 -z-0 transition-[opacity,transform] duration-200 ease-brand ${isPill ? 'rounded-full bg-primary' : 'rounded-xl bg-primary-dark'} ${
              active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} />
            <span className="relative z-10 flex items-center gap-2">
              {item.icon}
              {item.label}
            </span>
          </button>);

      })}
    </div>);

}