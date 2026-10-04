import { contact } from '../data/contact';
import type { Lang } from '../types/i18n';

export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Default prefilled inquiry in the active language, optionally naming a trip or package. */
export function inquiryWhatsappLink(lang: Lang, subject?: string): string {
  const base = contact.whatsappMessage[lang];
  return whatsappLink(subject ? `${base} (${subject})` : base);
}