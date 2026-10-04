import { Briefcase, Camera, Users, type LucideIcon } from 'lucide-react';
import type { ImageKey } from './images';
import type { Localized } from '../types/i18n';

export type VisaType = {id: string;icon: LucideIcon;title: Localized;text: Localized;};
export type Country = {id: string;flag: string;name: Localized;detail?: Localized;image?: ImageKey;};
export type Program = {id: string;image: ImageKey;title: Localized;text: Localized;};

export const gulfVisaTypes: VisaType[] = [
{
  id: 'family',
  icon: Users,
  title: { ar: 'تأشيرة الزيارة العائلية', en: 'Family visit visa' },
  text: { ar: 'لزيارة الأقارب المقيمين بالخليج.', en: 'To visit relatives residing in the Gulf.' }
},
{
  id: 'business',
  icon: Briefcase,
  title: { ar: 'تأشيرة الزيارة التجارية', en: 'Business visit visa' },
  text: { ar: 'للاجتماعات والمعارض والأعمال.', en: 'For meetings, exhibitions and business.' }
},
{
  id: 'tourist',
  icon: Camera,
  title: { ar: 'تأشيرة الزيارة السياحية', en: 'Tourist visit visa' },
  text: { ar: 'للسياحة والترفيه.', en: 'For tourism and leisure.' }
}];


export const gulfCountries: Country[] = [
{
  id: 'uae',
  flag: '🇦🇪',
  image: 'dubai',
  name: { ar: 'الإمارات', en: 'United Arab Emirates' },
  detail: { ar: 'دبي، أبوظبي، الشارقة وبقية الإمارات', en: 'Dubai, Abu Dhabi, Sharjah and the other emirates' }
},
{ id: 'ksa', flag: '🇸🇦', image: 'riyadh', name: { ar: 'السعودية', en: 'Saudi Arabia' } },
{ id: 'qatar', flag: '🇶🇦', image: 'doha', name: { ar: 'قطر', en: 'Qatar' } },
{ id: 'kuwait', flag: '🇰🇼', image: 'kuwait', name: { ar: 'الكويت', en: 'Kuwait' } },
{ id: 'oman', flag: '🇴🇲', image: 'muscat', name: { ar: 'سلطنة عُمان', en: 'Oman' } },
{ id: 'bahrain', flag: '🇧🇭', image: 'manama', name: { ar: 'البحرين', en: 'Bahrain' } }];


export const gulfPrograms: Program[] = [
{
  id: 'dubai',
  image: 'dubai',
  title: { ar: 'دبي', en: 'Dubai' },
  text: {
    ar: 'برنامج 4 أيام / 3 ليالٍ (برج خليفة – دبي مول – رحلة صحراوية – كورنيش المرينا).',
    en: '4 days / 3 nights (Burj Khalifa – Dubai Mall – desert safari – Marina walk).'
  }
},
{
  id: 'abudhabi',
  image: 'abuDhabi',
  title: { ar: 'أبوظبي', en: 'Abu Dhabi' },
  text: {
    ar: 'جامع الشيخ زايد وكورنيش أبوظبي وياس آيلاند.',
    en: 'Sheikh Zayed Grand Mosque, Abu Dhabi Corniche and Yas Island.'
  }
},
{
  id: 'combo',
  image: 'dubaiMarina',
  title: { ar: 'دبي + أبوظبي', en: 'Dubai + Abu Dhabi' },
  text: { ar: 'برنامج مزدوج دبي + أبوظبي.', en: 'A combined Dubai + Abu Dhabi program.' }
},
{
  id: 'family',
  image: 'burjAlArabResort',
  title: { ar: 'باقات عائلية وشهر عسل', en: 'Family & honeymoon packages' },
  text: {
    ar: 'باقات عائلية وشهر عسل لعدة دول خليجية.',
    en: 'Family and honeymoon packages across several Gulf countries.'
  }
}];


export const europeDestinations: Country[] = [
{ id: 'it', flag: '🇮🇹', name: { ar: 'إيطاليا', en: 'Italy' } },
{ id: 'fr', flag: '🇫🇷', name: { ar: 'فرنسا', en: 'France' } },
{ id: 'es', flag: '🇪🇸', name: { ar: 'إسبانيا', en: 'Spain' } },
{ id: 'de', flag: '🇩🇪', name: { ar: 'ألمانيا', en: 'Germany' } },
{ id: 'gr', flag: '🇬🇷', name: { ar: 'اليونان', en: 'Greece' } },
{ id: 'at', flag: '🇦🇹', name: { ar: 'النمسا', en: 'Austria' } },
{ id: 'nl', flag: '🇳🇱', name: { ar: 'هولندا', en: 'Netherlands' } },
{ id: 'ch', flag: '🇨🇭', name: { ar: 'سويسرا', en: 'Switzerland' } },
{ id: 'pt', flag: '🇵🇹', name: { ar: 'البرتغال', en: 'Portugal' } }];


export const europeOnRequest: Country[] = [
{ id: 'uk', flag: '🇬🇧', name: { ar: 'بريطانيا', en: 'United Kingdom' } },
{ id: 'cy', flag: '🇨🇾', name: { ar: 'قبرص', en: 'Cyprus' } },
{ id: 'tr', flag: '🇹🇷', name: { ar: 'تركيا', en: 'Türkiye' } }];


export const europePrograms: Program[] = [
{
  id: 'classic',
  image: 'paris',
  title: { ar: 'باريس وروما وبرشلونة', en: 'Paris, Rome & Barcelona' },
  text: { ar: 'جولة المدن الكلاسيكية.', en: 'The classic cities tour.' }
},
{
  id: 'italy',
  image: 'rome',
  title: { ar: 'إيطاليا', en: 'Italy' },
  text: { ar: 'روما وفلورنسا والبندقية.', en: 'Rome, Florence and Venice.' }
},
{
  id: 'central',
  image: 'vienna',
  title: { ar: 'جولة أوروبا الوسطى', en: 'Central Europe tour' },
  text: { ar: 'فيينا وبراغ وبودابست.', en: 'Vienna, Prague and Budapest.' }
},
{
  id: 'greece',
  image: 'santorini',
  title: { ar: 'جزر اليونان', en: 'Greek islands' },
  text: { ar: 'جزر اليونان والرحلات الصيفية.', en: 'The Greek islands and summer getaways.' }
},
{
  id: 'northwest',
  image: 'amsterdam',
  title: { ar: 'هولندا وبلجيكا وفرنسا', en: 'Netherlands, Belgium & France' },
  text: { ar: 'جولة شمال غرب أوروبا.', en: 'A tour of north-western Europe.' }
}];