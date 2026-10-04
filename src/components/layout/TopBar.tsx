import React from 'react';
import { ClockIcon, PhoneIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from '../icons/BrandIcons';
import { Ltr } from '../ui/Ltr';
import { PlaceholderText } from '../ui/PlaceholderText';

export function TopBar() {
  const { t, lang } = useLanguage();
  return (
    <div className="text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 border-b border-white/15 px-4 text-xs font-medium tracking-wide sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-gold-light">
            
            <PhoneIcon className="h-3.5 w-3.5 text-gold-light" aria-hidden="true" />
            <span className="hidden sm:inline">{t.topbar.call}:</span>
            <Ltr className="font-semibold">{contact.phoneDisplay}</Ltr>
          </a>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-gold-light">
            
            <WhatsAppIcon className="h-3.5 w-3.5 text-gold-light" />
            <span className="hidden sm:inline">{t.topbar.whatsapp}:</span>
            <Ltr className="font-semibold">{contact.whatsappDisplay}</Ltr>
          </a>
          <span className="hidden items-center gap-1.5 text-white/85 lg:flex">
            <ClockIcon className="h-3.5 w-3.5 text-gold-light" aria-hidden="true" />
            <span>{t.topbar.hoursLabel}:</span>
            <PlaceholderText text={t.topbar.hours} />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <SocialLink href={contact.social.facebook} label={lang === 'ar' ? 'فيسبوك' : 'Facebook'}>
            <FacebookIcon className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={contact.social.instagram} label={lang === 'ar' ? 'إنستجرام' : 'Instagram'}>
            <InstagramIcon className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={contact.social.tiktok} label={lang === 'ar' ? 'تيك توك' : 'TikTok'}>
            <TikTokIcon className="h-4 w-4" />
          </SocialLink>
        </div>
      </div>
    </div>);

}

function SocialLink({ href, label, children }: {href: string;label: string;children: React.ReactNode;}) {
  const external = href !== '#';
  return (
    <a
      href={href}
      aria-label={label}
      {...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
      className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-white/15 hover:text-white">
      
      {children}
    </a>);

}