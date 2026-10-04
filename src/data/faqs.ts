import type { Localized } from '../types/i18n';

export type Faq = {id: string;q: Localized;a: Localized;};

export const faqs: Faq[] = [
{
  id: 'how-book',
  q: { ar: 'كيف أحجز رحلة معكم؟', en: 'How do I book a trip with you?' },
  a: {
    ar: 'تواصل معنا عبر واتساب أو الهاتف أو نموذج الاستفسار، وسنرسل لك عرض السعر والتفاصيل، وبعد موافقتك يتم تأكيد الحجز بدفع عربون.',
    en: "Reach us via WhatsApp, phone or the inquiry form and we'll send you a quote with all the details. Once you approve, your booking is confirmed with a deposit."
  }
},
{
  id: 'deposit',
  q: { ar: 'ما العربون المطلوب لتأكيد الحجز؟', en: 'What deposit is required to confirm a booking?' },
  a: {
    ar: '[حدد النسبة أو المبلغ] ويُسدَّد الباقي قبل موعد السفر بـ [عدد الأيام].',
    en: '[Specify the percentage or amount], with the balance paid [number of days] before departure.'
  }
},
{
  id: 'cancel',
  q: { ar: 'هل يمكن إلغاء الحجز أو تعديله؟', en: 'Can I cancel or change my booking?' },
  a: {
    ar: 'نعم، وفق سياسة الإلغاء الموضحة في الموقع [اكتب السياسة أو اربطها بصفحتها]، وتختلف الشروط حسب نوع الخدمة والجهة المنفذة.',
    en: 'Yes, according to the cancellation policy on our website [write the policy or link to its page]. Terms vary by service type and provider.'
  }
},
{
  id: 'visa-guarantee',
  q: { ar: 'هل تضمنون الحصول على التأشيرة؟', en: 'Do you guarantee visa approval?' },
  a: {
    ar: 'نجهز لك الملف ونراجع المستندات ونقدم الطلب بالشكل الصحيح، لكن قرار منح التأشيرة يرجع للجهة المختصة، ولا يمكن لأي شركة ضمانه.',
    en: 'We prepare your file, review your documents and submit the application correctly — but the decision to grant a visa rests with the relevant authority, and no company can guarantee it.'
  }
},
{
  id: 'visa-time',
  q: { ar: 'كم تستغرق إجراءات التأشيرة؟', en: 'How long does the visa process take?' },
  a: {
    ar: 'تختلف المدة حسب الدولة والنوع والفترة من العام، وسنوضح لك المدة المتوقعة عند تقديم الطلب.',
    en: "It depends on the country, visa type and time of year. We'll tell you the expected timeframe when you apply."
  }
},
{
  id: 'families',
  q: { ar: 'هل الرحلات الداخلية مناسبة للعائلات والأطفال؟', en: 'Are domestic trips suitable for families and children?' },
  a: {
    ar: 'نعم، لدينا برامج عائلية وفنادق مناسبة للأطفال، ويمكننا تعديل البرنامج حسب أعمار المسافرين.',
    en: "Yes. We offer family programs and child-friendly hotels, and we can adjust the program to suit travelers' ages."
  }
},
{
  id: 'groups',
  q: { ar: 'هل تنظمون رحلات للشركات والمجموعات؟', en: 'Do you organize trips for companies and groups?' },
  a: {
    ar: 'نعم، ننظم رحلات الشركات والمدارس والمؤتمرات بأسعار خاصة للمجموعات.',
    en: 'Yes, we organize corporate, school and conference trips with special group rates.'
  }
},
{
  id: 'payment',
  q: { ar: 'ما طرق الدفع المتاحة؟', en: 'Which payment methods are available?' },
  a: {
    ar: '[اكتب الطرق المتاحة: نقدًا في المكتب، تحويل بنكي، إنستاباي، محفظة إلكترونية، بطاقة ائتمان...]',
    en: '[List the available methods: cash at the office, bank transfer, InstaPay, mobile wallet, credit card...]'
  }
}];