import {
  ClipboardCheck,
  FileSearch,
  ListChecks,
  MessageCircle,
  MessagesSquare,
  PlaneTakeoff,
  RefreshCw,
  Send,
  Stamp,
  type LucideIcon } from
'lucide-react';
import type { Localized } from '../types/i18n';

export type Step = {id: string;icon: LucideIcon;title: Localized;text: Localized;};

export const visaSteps: Step[] = [
{
  id: 'consult',
  icon: MessagesSquare,
  title: { ar: 'الاستشارة', en: 'Consultation' },
  text: { ar: 'نحدد معك الوجهة ونوع التأشيرة الأنسب لك.', en: 'Together we choose your destination and the most suitable visa type.' }
},
{
  id: 'docs',
  icon: FileSearch,
  title: { ar: 'تجهيز المستندات', en: 'Document preparation' },
  text: { ar: 'نرسل لك قائمة المستندات المطلوبة ونراجعها قبل التقديم.', en: 'We send you the list of required documents and review them before applying.' }
},
{
  id: 'apply',
  icon: Send,
  title: { ar: 'التقديم', en: 'Submission' },
  text: { ar: 'نقدم الطلب لدى الجهة المختصة بالطريقة الصحيحة.', en: 'We submit your application to the relevant authority the right way.' }
},
{
  id: 'follow',
  icon: RefreshCw,
  title: { ar: 'المتابعة', en: 'Follow-up' },
  text: { ar: 'نتابع الطلب ونوافيك بكل جديد.', en: 'We track your application and keep you updated.' }
},
{
  id: 'receive',
  icon: Stamp,
  title: { ar: 'الاستلام', en: 'Collection' },
  text: { ar: 'نسلمك التأشيرة ونساعدك في حجوزات السفر.', en: 'We hand over your visa and help with your travel bookings.' }
}];


export const bookingSteps: Step[] = [
{
  id: 'contact',
  icon: MessageCircle,
  title: { ar: 'تواصل معنا', en: 'Contact us' },
  text: { ar: 'عبر واتساب أو الهاتف أو نموذج الاستفسار في الموقع.', en: 'Via WhatsApp, phone or the inquiry form on this website.' }
},
{
  id: 'choose',
  icon: ListChecks,
  title: { ar: 'اختر برنامجك', en: 'Choose your program' },
  text: { ar: 'نعرض لك الخيارات المناسبة ونرسل عرض السعر.', en: 'We present the options that suit you and send a price quote.' }
},
{
  id: 'confirm',
  icon: ClipboardCheck,
  title: { ar: 'أكد الحجز', en: 'Confirm your booking' },
  text: { ar: 'بدفع عربون [نسبة العربون] وتسليم المستندات المطلوبة.', en: 'By paying a deposit of [deposit percentage] and submitting the required documents.' }
},
{
  id: 'travel',
  icon: PlaneTakeoff,
  title: { ar: 'سافر واستمتع', en: 'Travel & enjoy' },
  text: { ar: 'نرسل لك التفاصيل النهائية ونتابعك طوال الرحلة.', en: 'We send your final details and stay with you throughout the trip.' }
}];