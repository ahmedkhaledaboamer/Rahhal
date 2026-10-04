import type { Lang } from '../types/i18n';

/**
 * Customer reviews. Add ONLY real reviews, copied exactly as the customer wrote them
 * (with their permission). Leave `review: null` to show a clearly marked placeholder card.
 * Never translate a review and present it as the customer's own words — set `lang`
 * to the language the customer actually wrote in.
 */
export type Testimonial = {
  id: string;
  name: string | null; // e.g. 'أحمد – القاهرة'
  service: string | null; // e.g. 'عمرة'
  rating: number | null; // real star rating, 1-5
  photo: string | null; // real photo URL with permission, or null for initials
  review: {text: string;lang: Lang;} | null;
};

// Photos are in place; fill in each customer's real name, service, rating and review.
const photo = (n: number) => `/testimonials/customer-${n}.jpg`;

export const testimonials: Testimonial[] = Array.from({ length: 10 }, (_, i) => ({
  id: `customer-${i + 1}`,
  name: null,
  service: null,
  rating: null,
  photo: photo(i + 1),
  review: null
}));
