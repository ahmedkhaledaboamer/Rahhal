import {
  Award,
  Bus,
  Car,
  Gem,
  Hotel,
  Layers,
  LifeBuoy,
  PlaneTakeoff,
  Receipt,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
  Zap,
  type LucideIcon } from
'lucide-react';
import type { Localized } from '../types/i18n';

export type Feature = {id: string;icon: LucideIcon;title: Localized;text: Localized;};
export type ExtraService = {id: string;icon: LucideIcon;text: Localized;};

export const whyFeatures: Feature[] = [
{
  id: 'complete',
  icon: Layers,
  title: { ar: 'خدمة متكاملة', en: 'All-in-one service' },
  text: { ar: 'رحلات داخلية وخارجية وعمرة وتأشيرات من مكان واحد.', en: 'Domestic and international trips, Umrah and visas — all from one place.' }
},
{
  id: 'pricing',
  icon: Receipt,
  title: { ar: 'أسعار واضحة', en: 'Clear pricing' },
  text: { ar: 'نوضح لك ما تشمله الرحلة وما لا تشمله قبل الدفع.', en: "We explain exactly what's included — and what isn't — before you pay." }
},
{
  id: 'speed',
  icon: Zap,
  title: { ar: 'سرعة وسهولة', en: 'Fast & easy' },
  text: { ar: 'رد سريع على استفساراتك وإجراءات منظمة.', en: 'Quick answers to your questions and well-organized procedures.' }
},
{
  id: 'trust',
  icon: Award,
  title: { ar: 'خبرة وثقة', en: 'Experience & trust' },
  text: { ar: 'فريق يعرف الوجهات والإجراءات ويراجع كل التفاصيل.', en: 'A team that knows the destinations and procedures, and checks every detail.' }
},
{
  id: 'flexible',
  icon: SlidersHorizontal,
  title: { ar: 'برامج مرنة', en: 'Flexible programs' },
  text: { ar: 'نعدّل البرنامج ليناسب ميزانيتك ومواعيدك وعدد الأفراد.', en: 'We tailor the program to your budget, dates and group size.' }
},
{
  id: 'support',
  icon: LifeBuoy,
  title: { ar: 'دعم مستمر', en: 'Ongoing support' },
  text: { ar: 'نتابعك قبل السفر وأثناءه وبعده.', en: 'We are with you before, during and after your trip.' }
}];


export const extraServices: ExtraService[] = [
{ id: 'flights', icon: PlaneTakeoff, text: { ar: 'حجز تذاكر الطيران داخليًا ودوليًا.', en: 'Domestic and international flight bookings.' } },
{ id: 'hotels', icon: Hotel, text: { ar: 'حجز الفنادق والمنتجعات حول العالم.', en: 'Hotel and resort bookings worldwide.' } },
{ id: 'insurance', icon: ShieldCheck, text: { ar: 'تأمين السفر الشامل.', en: 'Comprehensive travel insurance.' } },
{ id: 'transfer', icon: Bus, text: { ar: 'الانتقالات من وإلى المطار وخدمة الاستقبال (Transfer).', en: 'Airport transfers and meet & greet service.' } },
{ id: 'cars', icon: Car, text: { ar: 'تأجير السيارات مع أو بدون سائق.', en: 'Car rental with or without a driver.' } },
{ id: 'groups', icon: Users, text: { ar: 'رحلات الشركات والمجموعات والمؤتمرات والمدارس.', en: 'Corporate, group, conference and school trips.' } },
{ id: 'honeymoon', icon: Gem, text: { ar: 'برامج شهر العسل والرحلات العائلية الخاصة.', en: 'Honeymoon programs and private family trips.' } },
{ id: 'custom', icon: Sparkles, text: { ar: 'برامج مخصصة بالكامل حسب طلبك.', en: 'Fully tailor-made programs on request.' } }];