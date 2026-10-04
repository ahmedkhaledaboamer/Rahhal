import { CalendarHeart, Crown, Moon, Star, Wallet, type LucideIcon } from 'lucide-react';
import type { ImageKey } from './images';
import type { Localized } from '../types/i18n';

export type UmrahPackage = {
  id: string;
  icon: LucideIcon;
  image: ImageKey;
  name: Localized;
  suitedFor: Localized;
  features: Localized;
};

export const umrahPackages: UmrahPackage[] = [
{
  id: 'economy',
  icon: Wallet,
  image: 'haramNight',
  name: { ar: 'اقتصادية', en: 'Economy' },
  suitedFor: { ar: 'الأفراد والميزانيات المحدودة', en: 'Individuals and limited budgets' },
  features: { ar: 'إقامة مريحة بمسافة معقولة من الحرم', en: 'Comfortable stay at a reasonable distance from the Haram' }
},
{
  id: 'standard',
  icon: Star,
  image: 'heroMakkah',
  name: { ar: '3 / 4 نجوم', en: '3 / 4 Stars' },
  suitedFor: { ar: 'العائلات', en: 'Families' },
  features: { ar: 'فنادق مناسبة وقريبة من الحرم وخدمات كاملة', en: 'Suitable hotels close to the Haram with full services' }
},
{
  id: 'vip',
  icon: Crown,
  image: 'umrahHotel',
  name: { ar: '5 نجوم / VIP', en: '5 Stars / VIP' },
  suitedFor: { ar: 'من يريد أعلى مستوى راحة', en: 'Those seeking the highest level of comfort' },
  features: { ar: 'إقامة فاخرة قرب الحرم وخدمة مميزة', en: 'Luxury stay near the Haram with distinguished service' }
},
{
  id: 'ramadan',
  icon: Moon,
  image: 'ramadan',
  name: { ar: 'عمرة رمضان', en: 'Ramadan Umrah' },
  suitedFor: { ar: 'من يفضل أداء العمرة في الشهر الكريم', en: 'Those who wish to perform Umrah in the holy month' },
  features: { ar: 'حجز مبكر مطلوب، أماكن محدودة', en: 'Early booking required — limited places' }
},
{
  id: 'holidays',
  icon: CalendarHeart,
  image: 'haramDusk',
  name: { ar: 'عمرة الإجازات', en: 'Holiday Umrah' },
  suitedFor: { ar: 'العائلات في إجازة المدارس والأعياد', en: 'Families during school breaks and Eid holidays' },
  features: { ar: 'مواعيد مرنة وبرامج للعائلات والأطفال', en: 'Flexible dates and programs for families and children' }
}];