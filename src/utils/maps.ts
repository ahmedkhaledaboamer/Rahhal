import { contact } from '../data/contact';
import type { Lang } from '../types/i18n';

/** Google Maps embed URL with the interface language matching the site (hl=ar / hl=en). */
export function mapEmbedUrl(lang: Lang): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapEmbedQuery)}&hl=${lang}&z=14&output=embed`;
}