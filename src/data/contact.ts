import type { Localized } from '../types/i18n';

/** Single source of truth for every contact detail used across the site. */
export const contact = {
  phoneDisplay: '01117888955',
  phoneHref: 'tel:+201117888955',

  whatsappDisplay: '01019483858',
  whatsappNumber: '201019483858',
  whatsappUrl: 'https://wa.me/201019483858',
  whatsappMessage: {
    ar: 'مرحبًا رحال، أريد الاستفسار عن رحلة',
    en: 'Hello Rahhal, I would like to inquire about a trip.'
  } as Localized,

  // TODO: replace with the real company email, e.g. 'info@rahhal.com'. While empty, a placeholder is shown.
  email: '',
  emailPlaceholder: '[info@yourdomain.com]',

  mapsUrl: 'https://maps.app.goo.gl/nfeimK62TH61znDU6',
  // TODO: replace with the office's exact address or "lat,lng" so the embedded map pins the office precisely.
  mapEmbedQuery: 'Cairo, Egypt',

  // TODO: add the Google Business review link.
  googleReviewUrl: '#',

  social: {
    facebook: 'https://www.facebook.com/share/1DcnpuBKmo/?mibextid=wwXIfr',
    // TODO: add the real Instagram profile link.
    instagram: '#',
    // TODO: add the real TikTok profile link.
    tiktok: '#'
  }
};