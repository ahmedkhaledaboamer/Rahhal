import { Building2, Landmark, Moon, TreePalm, type LucideIcon } from 'lucide-react';
import type { ImageKey } from './images';
import type { IntlTab, TripTab } from '../types/booking';
import type { Localized } from '../types/i18n';

export type Service = {
  id: string;
  icon: LucideIcon;
  image: ImageKey;
  title: Localized;
  text: Localized;
  tab: TripTab;
  intlTab?: IntlTab;
};

export const services: Service[] = [
{
  id: 'domestic',
  icon: TreePalm,
  image: 'dahabBlueHole',
  title: { ar: 'الرحلات الداخلية', en: 'Domestic Trips' },
  text: {
    ar: 'دهب، شرم الشيخ، الغردقة، نويبع، سانت كاترين، رأس سدر والعين السخنة ببرامج تناسب الجميع.',
    en: 'Dahab, Sharm El Sheikh, Hurghada, Nuweiba, Saint Catherine, Ras Sedr and Ain Sokhna — with programs for everyone.'
  },
  tab: 'domestic'
},
{
  id: 'umrah',
  icon: Moon,
  image: 'madinah',
  title: { ar: 'العمرة والحج', en: 'Umrah & Hajj' },
  text: {
    ar: 'باقات عمرة متنوعة بإقامة قريبة من الحرم وتنظيم كامل للرحلة وإجراءات التأشيرة.',
    en: 'Diverse Umrah packages with stays near the Haram, full trip organization and visa procedures.'
  },
  tab: 'umrah'
},
{
  id: 'gulf',
  icon: Building2,
  image: 'dubai',
  title: { ar: 'السفر للخليج', en: 'Gulf Travel' },
  text: {
    ar: 'تأشيرات زيارة عائلية وتجارية وسياحية للإمارات والسعودية وقطر والكويت وعُمان والبحرين.',
    en: 'Family, business and tourist visit visas for the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.'
  },
  tab: 'international',
  intlTab: 'gulf'
},
{
  id: 'europe',
  icon: Landmark,
  image: 'paris',
  title: { ar: 'الرحلات الأوروبية', en: 'European Trips' },
  text: {
    ar: 'تأشيرات وبرامج سياحية لأشهر الوجهات الأوروبية بمتابعة دقيقة لكل خطوة.',
    en: "Visas and tour programs for Europe's most popular destinations, with careful follow-up at every step."
  },
  tab: 'international',
  intlTab: 'europe'
}];