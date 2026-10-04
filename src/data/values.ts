import { BadgeCheck, Briefcase, HeartHandshake, Sofa, Zap, type LucideIcon } from 'lucide-react';
import type { Localized } from '../types/i18n';

export type CompanyValue = {id: string;icon: LucideIcon;title: Localized;text: Localized;};

export const companyValues: CompanyValue[] = [
{
  id: 'honesty',
  icon: BadgeCheck,
  title: { ar: 'الأمانة والوضوح', en: 'Honesty & transparency' },
  text: { ar: 'لا رسوم مخفية، وما نتفق عليه هو ما يُنفَّذ.', en: 'No hidden fees — what we agree on is exactly what we deliver.' }
},
{
  id: 'professionalism',
  icon: Briefcase,
  title: { ar: 'الاحترافية', en: 'Professionalism' },
  text: { ar: 'فريق مدرّب وإجراءات منظمة من الحجز حتى العودة.', en: 'A trained team and organized procedures from booking to return.' }
},
{
  id: 'speed',
  icon: Zap,
  title: { ar: 'السرعة', en: 'Speed' },
  text: { ar: 'رد سريع على الاستفسارات وإنجاز المعاملات في وقتها.', en: 'Quick replies to inquiries and paperwork completed on time.' }
},
{
  id: 'comfort',
  icon: Sofa,
  title: { ar: 'الراحة', en: 'Comfort' },
  text: { ar: 'برامج مدروسة تناسب العائلات والأفراد والمجموعات.', en: 'Well-planned programs for families, individuals and groups.' }
},
{
  id: 'care',
  icon: HeartHandshake,
  title: { ar: 'الاهتمام بالعميل', en: 'Client care' },
  text: { ar: 'متابعة مستمرة ودعم قبل السفر وأثناءه وبعده.', en: 'Ongoing follow-up and support before, during and after your trip.' }
}];