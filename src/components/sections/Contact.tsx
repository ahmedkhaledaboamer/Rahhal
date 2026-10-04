import React from 'react';
import { m } from 'framer-motion';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { fadeUp, stagger, viewportOnce } from '../../utils/motion';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from '../icons/BrandIcons';
import { Ltr } from '../ui/Ltr';
import { PlaceholderText } from '../ui/PlaceholderText';
import { SectionTitle } from '../ui/SectionTitle';

type ContactItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
  featured?: boolean;
};

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const hasEmail = Boolean(contact.email);

  const items: ContactItem[] = [
  { id: 'call', featured: true, icon: <PhoneIcon className="h-6 w-6" aria-hidden="true" />, label: c.call, value: <Ltr>{contact.phoneDisplay}</Ltr>, href: contact.phoneHref },
  { id: 'wa', featured: true, icon: <WhatsAppIcon className="h-6 w-6" />, label: c.whatsapp, value: <Ltr>{contact.whatsappDisplay}</Ltr>, href: contact.whatsappUrl, external: true },
  {
    id: 'email',
    icon: <MailIcon className="h-6 w-6" aria-hidden="true" />,
    label: c.email,
    value: <Ltr>{hasEmail ? contact.email : <PlaceholderText text={contact.emailPlaceholder} />}</Ltr>,
    href: hasEmail ? `mailto:${contact.email}` : undefined
  },
  {
    id: 'address',
    icon: <MapPinIcon className="h-6 w-6" aria-hidden="true" />,
    label: c.address,
    value:
    <>
          <PlaceholderText text={c.addressValue} />
          <span className="mt-1 block text-sm font-bold text-primary">{c.mapLink}</span>
        </>,

    href: contact.mapsUrl,
    external: true
  },
  { id: 'hours', icon: <ClockIcon className="h-6 w-6" aria-hidden="true" />, label: c.hours, value: <PlaceholderText text={c.hoursValue} /> },
  { id: 'fb', icon: <FacebookIcon className="h-6 w-6" />, label: c.facebook, value: c.facebookValue, href: contact.social.facebook, external: true },
  {
    id: 'ig',
    icon: <InstagramIcon className="h-6 w-6" />,
    label: c.instagram,
    value: <PlaceholderText text={c.instagramValue} />,
    href: contact.social.instagram !== '#' ? contact.social.instagram : undefined,
    external: true
  },
  {
    id: 'tt',
    icon: <TikTokIcon className="h-6 w-6" />,
    label: c.tiktok,
    value: <PlaceholderText text={c.tiktokValue} />,
    href: contact.social.tiktok !== '#' ? contact.social.tiktok : undefined,
    external: true
  }];


  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle id="contact-title" title={c.title} />
        <m.ul
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {items.map((item) =>
          <m.li key={item.id} variants={fadeUp} className={item.featured ? 'lg:col-span-2' : ''}>
              <ContactCard item={item} />
            </m.li>
          )}
        </m.ul>
      </div>
    </section>);

}

function ContactCard({ item }: {item: ContactItem;}) {
  const featured = item.featured;
  const body =
  <>
      <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
      featured ? 'bg-gold text-ink' : 'bg-primary-light text-primary-dark'}`
      }>
      
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-bold ${featured ? 'text-gold-light' : 'text-ink/55'}`}>{item.label}</span>
        <span className={`mt-1 block break-words font-extrabold ${featured ? 'text-2xl text-white' : 'text-[15px] text-ink'}`}>
          {item.value}
        </span>
      </span>
    </>;

  const base = `flex h-full items-center gap-4 rounded-3xl p-6 ${
  featured ? 'bg-primary-dark shadow-lift' : 'bg-cloud ring-1 ring-ink/5'}`;


  if (!item.href) return <div className={base}>{body}</div>;
  return (
    <a
      href={item.href}
      {...item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
      className={`${base} transition-[transform,box-shadow,background-color] duration-200 ease-brand hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 motion-reduce:hover:translate-y-0 ${
      featured ? 'hover:bg-primary-deep' : 'hover:bg-white'}`
      }>
      
      {body}
    </a>);

}