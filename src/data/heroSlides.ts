import type { ImageKey } from './images';
import type { Localized } from '../types/i18n';

export type HeroAction = 'inquiry' | 'domestic' | 'umrah' | 'visas';

export type HeroSlide = {
  id: string;
  image: ImageKey;
  alt: Localized;
  title: Localized;
  text: Localized;
  cta: Localized;
  action: HeroAction;
};

export const heroSlides: HeroSlide[] = [
{
  id: 'start',
  image: 'heroWing',
  alt: { ar: 'جناح طائرة فوق السحاب وقت الغروب', en: 'Airplane wing above the clouds at sunset' },
  title: { ar: 'رحال… رحلتك تبدأ من هنا', en: 'Rahhal… your journey starts here' },
  text: {
    ar: 'رحلات داخلية، عمرة، تأشيرات الخليج وأوروبا، وبرامج سياحية متكاملة… كل ما تحتاجه للسفر في مكان واحد وبأمان وأسعار واضحة.',
    en: 'Domestic trips, Umrah, Gulf and Europe visas, and complete tour programs — everything you need to travel, in one place, safely and with clear prices.'
  },
  cta: { ar: 'احجز رحلتك الآن', en: 'Book your trip now' },
  action: 'inquiry'
},
{
  id: 'sinai',
  image: 'heroRedSea',
  alt: { ar: 'ساحل البحر الأحمر وجبال جنوب سيناء', en: 'Red Sea coastline and South Sinai mountains' },
  title: { ar: 'اكتشف جمال سيناء والبحر الأحمر', en: 'Discover the beauty of Sinai & the Red Sea' },
  text: {
    ar: 'دهب، شرم الشيخ، الغردقة، نويبع وسانت كاترين بأفضل البرامج.',
    en: 'Dahab, Sharm El Sheikh, Hurghada, Nuweiba and Saint Catherine — with our best programs.'
  },
  cta: { ar: 'شاهد الرحلات الداخلية', en: 'View domestic trips' },
  action: 'domestic'
},
{
  id: 'umrah',
  image: 'heroMakkah',
  alt: { ar: 'المسجد الحرام في مكة المكرمة', en: 'Masjid al-Haram in Makkah' },
  title: { ar: 'رحلة العمرة بكل راحة وطمأنينة', en: 'Umrah with comfort and peace of mind' },
  text: {
    ar: 'باقات عمرة متنوعة بإقامة مريحة وإشراف كامل من الانطلاق حتى العودة.',
    en: 'A range of Umrah packages with comfortable stays and full supervision from departure to return.'
  },
  cta: { ar: 'اعرف باقات العمرة', en: 'Explore Umrah packages' },
  action: 'umrah'
},
{
  id: 'visas',
  image: 'heroPassport',
  alt: { ar: 'جواز سفر وتأشيرات على مكتب', en: 'Passport with visa stamps on a desk' },
  title: { ar: 'تأشيراتك علينا', en: 'Leave your visas to us' },
  text: {
    ar: 'فيز الخليج وأوروبا بمراجعة دقيقة للمستندات ومتابعة خطوة بخطوة.',
    en: 'Gulf and Europe visas with careful document review and step-by-step follow-up.'
  },
  cta: { ar: 'ابدأ طلب التأشيرة', en: 'Start your visa application' },
  action: 'visas'
}];