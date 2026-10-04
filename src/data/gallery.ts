import type { ImageKey } from './images';
import type { Localized } from '../types/i18n';

export type GalleryItem = {key: ImageKey;alt: Localized;ratio: 'tall' | 'wide' | 'square';};

export const galleryItems: GalleryItem[] = [
{ key: 'dahabBlueHole', ratio: 'tall', alt: { ar: 'البلو هول في دهب', en: 'The Blue Hole, Dahab' } },
{ key: 'santorini', ratio: 'square', alt: { ar: 'سانتوريني باليونان', en: 'Santorini, Greece' } },
{ key: 'sharmReef', ratio: 'wide', alt: { ar: 'الشعاب المرجانية بالبحر الأحمر', en: 'Red Sea coral reef' } },
{ key: 'catherineSunrise', ratio: 'tall', alt: { ar: 'الشروق من جبل موسى', en: 'Sunrise from Mount Sinai' } },
{ key: 'madinah', ratio: 'wide', alt: { ar: 'المسجد النبوي في المدينة المنورة', en: "The Prophet's Mosque, Madinah" } },
{ key: 'dubai', ratio: 'square', alt: { ar: 'برج خليفة في دبي', en: 'Burj Khalifa, Dubai' } },
{ key: 'nuweibaCanyon', ratio: 'tall', alt: { ar: 'الوادي الملون في نويبع', en: 'The Colored Canyon, Nuweiba' } },
{ key: 'hurghadaGiftun', ratio: 'wide', alt: { ar: 'جزيرة الجفتون بالغردقة', en: 'Giftun Island, Hurghada' } },
{ key: 'rome', ratio: 'square', alt: { ar: 'الكولوسيوم في روما', en: 'The Colosseum, Rome' } },
{ key: 'sedrKite', ratio: 'wide', alt: { ar: 'الكايت سيرف في رأس سدر', en: 'Kitesurfing in Ras Sedr' } },
{ key: 'abuDhabi', ratio: 'tall', alt: { ar: 'جامع الشيخ زايد في أبوظبي', en: 'Sheikh Zayed Grand Mosque, Abu Dhabi' } },
{ key: 'amsterdam', ratio: 'square', alt: { ar: 'قنوات أمستردام', en: 'Amsterdam canals' } },
{ key: 'hurghadaSafari', ratio: 'wide', alt: { ar: 'سفاري الصحراء', en: 'Desert safari' } },
{ key: 'barcelona', ratio: 'square', alt: { ar: 'برشلونة وكنيسة ساغرادا فاميليا', en: 'Barcelona and the Sagrada Família' } }];