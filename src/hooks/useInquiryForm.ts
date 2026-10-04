import { useEffect, useState } from 'react';
import { useBooking } from '../contexts/BookingContext';
import { useLanguage } from '../contexts/LanguageContext';
import type { InquiryServiceId } from '../types/booking';
import { toWesternDigits } from '../utils/text';
import { whatsappLink } from '../utils/whatsapp';

export type InquiryValues = {
  name: string;
  phone: string;
  email: string;
  service: InquiryServiceId | '';
  destination: string;
  date: string;
  adults: string;
  children: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;
type Status = 'idle' | 'submitting' | 'success';

const empty: InquiryValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  destination: '',
  date: '',
  adults: '',
  children: '',
  message: ''
};

export const serviceIds: InquiryServiceId[] = ['domestic', 'international', 'umrah', 'hajj', 'visaGulf', 'visaEurope', 'other'];

export function useInquiryForm() {
  const { t } = useLanguage();
  const { prefill, prefillVersion } = useBooking();
  const [values, setValues] = useState<InquiryValues>(empty);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryValues, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [waUrl, setWaUrl] = useState('');

  // Apply values pushed from the quick search or "book" buttons.
  useEffect(() => {
    if (!prefillVersion) return;
    setStatus('idle');
    setValues((v) => ({
      ...v,
      service: prefill.service !== undefined ? prefill.service : v.service,
      destination: prefill.destination ?? v.destination,
      date: prefill.date ?? v.date
    }));
  }, [prefillVersion, prefill]);

  const validate = (v: InquiryValues): InquiryErrors => {
    const e: InquiryErrors = {};
    const e1 = t.inquiry.errors;
    if (!v.name.trim()) e.name = e1.nameRequired;else
    if (v.name.trim().length < 3) e.name = e1.nameShort;
    const digits = v.phone.replace(/[\s\-()+]/g, '');
    if (!digits) e.phone = e1.phoneRequired;else
    if (!/^\d{8,15}$/.test(digits)) e.phone = e1.phoneInvalid;
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = e1.emailInvalid;
    if (!v.service) e.service = e1.serviceRequired;
    if (v.adults && !/^\d{1,3}$/.test(v.adults)) e.adults = e1.countInvalid;
    if (v.children && !/^\d{1,3}$/.test(v.children)) e.children = e1.countInvalid;
    if (v.date && v.date < new Date().toISOString().slice(0, 10)) e.date = e1.datePast;
    return e;
  };

  // Re-validate in the active language so messages switch with the language.
  useEffect(() => {
    if (Object.keys(touched).length) setErrors(filterTouched(validate(values), touched));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const setField = <K extends keyof InquiryValues,>(key: K, raw: InquiryValues[K]) => {
    const value = (['phone', 'adults', 'children'].includes(key) ? toWesternDigits(String(raw)) : raw) as InquiryValues[K];
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(filterTouched(validate(next), touched));
  };

  const blurField = (key: keyof InquiryValues) => {
    const nextTouched = { ...touched, [key]: true };
    setTouched(nextTouched);
    setErrors(filterTouched(validate(values), nextTouched));
  };

  const buildMessage = (v: InquiryValues) => {
    const f = t.inquiry.fields;
    const lines = [
    `*${t.inquiry.waHeader}*`,
    `${f.name}: ${v.name.trim()}`,
    `${f.phone}: ${v.phone}`,
    v.email && `${f.email}: ${v.email.trim()}`,
    v.service && `${f.service}: ${t.inquiry.serviceOptions[v.service]}`,
    v.destination && `${f.destination}: ${v.destination.trim()}`,
    v.date && `${f.date}: ${v.date}`,
    (v.adults || v.children) && `${f.travelers}: ${f.adults} ${v.adults || 0} / ${f.children} ${v.children || 0}`,
    v.message && `${f.message}: ${v.message.trim()}`].
    filter(Boolean);
    return lines.join('\n');
  };

  /** Returns the id of the first invalid field, or null on success. */
  const submit = (): keyof InquiryValues | null => {
    const allTouched = Object.keys(empty).reduce((acc, k) => ({ ...acc, [k]: true }), {} as Record<keyof InquiryValues, boolean>);
    setTouched(allTouched);
    const e = validate(values);
    setErrors(e);
    const firstInvalid = (Object.keys(empty) as (keyof InquiryValues)[]).find((k) => e[k]);
    if (firstInvalid) return firstInvalid;

    setStatus('submitting');
    const url = whatsappLink(buildMessage(values));
    setWaUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    window.setTimeout(() => setStatus('success'), 450);
    return null;
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  return { values, errors, status, waUrl, setField, blurField, submit, reset };
}

function filterTouched(errors: InquiryErrors, touched: Partial<Record<keyof InquiryValues, boolean>>): InquiryErrors {
  return Object.fromEntries(Object.entries(errors).filter(([k]) => touched[k as keyof InquiryValues])) as InquiryErrors;
}