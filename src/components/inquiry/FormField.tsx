import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlertIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, required, error, className = '', children }: FormFieldProps) {
  const { t } = useLanguage();
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-center gap-1.5 text-sm font-bold text-ink">
        {label}
        {required ?
        <span className="text-gold-dark" aria-hidden="true">
            *
          </span> :

        <span className="text-xs font-medium text-ink/45">({t.inquiry.optional})</span>
        }
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error &&
        <motion.p
          id={`${id}-error`}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-red-700">
          
            <CircleAlertIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        }
      </AnimatePresence>
    </div>);

}

export function inputClass(hasError: boolean): string {
  return `block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4 ${
  hasError ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-ink/10 focus:border-primary focus:ring-primary/15'}`;

}