import React from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ChevronDownIcon, LoaderCircleIcon, LockIcon, SendIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { serviceIds, useInquiryForm, type InquiryValues } from '../../hooks/useInquiryForm';
import { EASE_OUT } from '../../utils/motion';
import { WhatsAppIcon } from '../icons/BrandIcons';
import { Button } from '../ui/Button';
import { FormField, inputClass } from './FormField';

export function InquiryForm() {
  const { t, lang } = useLanguage();
  const { values, errors, status, waUrl, setField, blurField, submit, reset } = useInquiryForm();
  const f = t.inquiry.fields;
  const p = t.inquiry.placeholders;
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const invalid = submit();
    if (invalid) document.getElementById(`inq-${invalid}`)?.focus();
  };

  const bind = (key: keyof InquiryValues) => ({
    id: `inq-${key}`,
    name: key,
    value: values[key],
    onBlur: () => blurField(key),
    'aria-invalid': Boolean(errors[key]) || undefined,
    'aria-describedby': errors[key] ? `inq-${key}-error` : undefined
  });

  return (
    <div className="relative rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink/5 sm:p-8 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ?
        <SuccessPanel key="success" waUrl={waUrl} onReset={reset} /> :

        <m.form
          key="form"
          noValidate
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="grid gap-5 sm:grid-cols-2">
          
            <FormField id="inq-name" label={f.name} required error={errors.name}>
              <input {...bind('name')} type="text" autoComplete="name" placeholder={p.name} onChange={(e) => setField('name', e.target.value)} className={inputClass(!!errors.name)} />
            </FormField>

            <FormField id="inq-phone" label={f.phone} required error={errors.phone}>
              <input
              {...bind('phone')}
              type="tel"
              inputMode="tel"
              dir="ltr"
              autoComplete="tel"
              placeholder={p.phone}
              onChange={(e) => setField('phone', e.target.value)}
              className={`${inputClass(!!errors.phone)} text-start rtl:text-end`} />
            
            </FormField>

            <FormField id="inq-email" label={f.email} error={errors.email}>
              <input
              {...bind('email')}
              type="email"
              dir="ltr"
              autoComplete="email"
              placeholder={p.email}
              onChange={(e) => setField('email', e.target.value)}
              className={`${inputClass(!!errors.email)} rtl:text-end`} />
            
            </FormField>

            <FormField id="inq-service" label={f.service} required error={errors.service}>
              <div className="relative">
                <select
                {...bind('service')}
                onChange={(e) => setField('service', e.target.value as InquiryValues['service'])}
                className={`${inputClass(!!errors.service)} appearance-none pe-10 ${values.service ? '' : 'text-ink/45'}`}>
                
                  <option value="">{t.inquiry.selectService}</option>
                  {serviceIds.map((id) =>
                <option key={id} value={id} className="text-ink">
                      {t.inquiry.serviceOptions[id]}
                    </option>
                )}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute end-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45" aria-hidden="true" />
              </div>
            </FormField>

            <FormField id="inq-destination" label={f.destination} error={errors.destination}>
              <input {...bind('destination')} type="text" placeholder={p.destination} onChange={(e) => setField('destination', e.target.value)} className={inputClass(!!errors.destination)} />
            </FormField>

            <FormField id="inq-date" label={f.date} error={errors.date}>
              <input {...bind('date')} type="date" min={today} onChange={(e) => setField('date', e.target.value)} className={inputClass(!!errors.date)} />
            </FormField>

            <fieldset className="sm:col-span-2">
              <legend className="mb-2 flex items-center gap-1.5 text-sm font-bold text-ink">
                {f.travelers} <span className="text-xs font-medium text-ink/45">({t.inquiry.optional})</span>
              </legend>
              <div className="grid grid-cols-2 gap-4">
                <CountInput {...bind('adults')} label={f.adults} error={errors.adults} onChange={(v) => setField('adults', v)} />
                <CountInput {...bind('children')} label={f.children} error={errors.children} onChange={(v) => setField('children', v)} />
              </div>
            </fieldset>

            <FormField id="inq-message" label={f.message} className="sm:col-span-2">
              <textarea {...bind('message')} rows={4} placeholder={p.message} onChange={(e) => setField('message', e.target.value)} className={`${inputClass(false)} resize-y`} />
            </FormField>

            <div className="sm:col-span-2">
              {Object.keys(errors).length > 0 &&
            <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="status">
                  {t.inquiry.errorSummary}
                </p>
            }
              <Button
              type="submit"
              variant="gold"
              size="lg"
              fullWidth
              disabled={status === 'submitting'}
              icon={
              status === 'submitting' ?
              <LoaderCircleIcon className="h-5 w-5 animate-spin" aria-hidden="true" /> :

              <SendIcon className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />

              }>
              
                {status === 'submitting' ? t.inquiry.submitting : t.inquiry.submit}
              </Button>
              <p className="mt-4 flex items-start justify-center gap-2 text-center text-sm text-ink/55">
                <LockIcon className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {t.inquiry.privacy}
              </p>
            </div>
          </m.form>
        }
      </AnimatePresence>
      <span className="sr-only" lang={lang} aria-live="polite">
        {status === 'success' ? t.inquiry.success : ''}
      </span>
    </div>);

}

type CountInputProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
  value: string;
  onBlur: () => void;
  onChange: (v: string) => void;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

function CountInput({ id, name, label, error, value, onBlur, onChange, ...aria }: CountInputProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-ink/60">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        inputMode="numeric"
        dir="ltr"
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0"
        aria-invalid={aria['aria-invalid']}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputClass(!!error)} rtl:text-end`} />
      
      {error &&
      <p id={`${id}-error`} role="alert" className="mt-1 text-xs font-semibold text-red-700">
          {error}
        </p>
      }
    </div>);

}

function SuccessPanel({ waUrl, onReset }: {waUrl: string;onReset: () => void;}) {
  const { t } = useLanguage();
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className="flex flex-col items-center py-10 text-center">
      
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-light">
        <svg viewBox="0 0 52 52" className="h-12 w-12 text-primary-dark" aria-hidden="true">
          <m.circle
            cx="26"
            cy="26"
            r="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, ease: EASE_OUT }} />
          
          <m.path
            d="M15 27l7 7 15-15"
            fill="none"
            stroke="#D9A62E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.25 }} />
          
        </svg>
      </div>
      <h3 className="mt-6 text-2xl font-extrabold text-ink">{t.inquiry.successTitle}</h3>
      <p className="mt-3 max-w-md text-lg text-ink/75">{t.inquiry.success}</p>
      <p className="mt-3 max-w-md text-sm text-ink/55">{t.inquiry.successHint}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="whatsapp" href={waUrl} external icon={<WhatsAppIcon className="h-5 w-5" />}>
          {t.inquiry.openWhatsapp}
        </Button>
        <Button variant="outline" onClick={onReset}>
          {t.inquiry.newInquiry}
        </Button>
      </div>
    </m.div>);

}