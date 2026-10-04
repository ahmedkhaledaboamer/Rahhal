import { Award, Headphones, MapPinned, Users, type LucideIcon } from 'lucide-react';
import type { Localized } from '../types/i18n';

export type Stat = {
  id: string;
  icon: LucideIcon;
  /** Set a real number to enable the animated count-up. While null, the placeholder is shown. */
  value: number | null;
  prefix?: string;
  suffix?: string;
  unit?: Localized;
  placeholder: string;
  label: Localized;
};

// Edit with REAL values only.
export const stats: Stat[] = [
{
  id: 'years',
  icon: Award,
  value: null,
  prefix: '+',
  unit: { ar: 'سنة', en: 'years' },
  placeholder: '[+00]',
  label: { ar: 'من الخبرة في السياحة والسفر', en: 'of experience in travel & tourism' }
},
{
  id: 'clients',
  icon: Users,
  value: null,
  prefix: '+',
  placeholder: '[+0000]',
  label: { ar: 'عميل سافر معنا', en: 'clients have traveled with us' }
},
{
  id: 'destinations',
  icon: MapPinned,
  value: null,
  prefix: '+',
  placeholder: '[+00]',
  label: { ar: 'وجهة داخلية وخارجية', en: 'domestic & international destinations' }
},
{
  id: 'support',
  icon: Headphones,
  value: null,
  placeholder: '[24/7]',
  label: { ar: 'دعم ومتابعة أثناء الرحلة', en: 'support and follow-up during your trip' }
}];