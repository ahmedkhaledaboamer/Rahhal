import React from 'react';
import { ArrowUpIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact } from '../../data/contact';
import { footerQuickLinks } from '../../data/navigation';
import type { IntlTab, TripTab } from '../../types/booking';
import { scrollToSection } from '../../utils/scroll';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from '../icons/BrandIcons';
import { Brand } from '../ui/Brand';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Ltr } from '../ui/Ltr';
import { PlaceholderText } from '../ui/PlaceholderText';

const serviceLinks: {key: 'domestic' | 'gulf' | 'europe' | 'umrah' | 'flights';tab?: TripTab;intl?: IntlTab;}[] = [
{ key: 'domestic', tab: 'domestic' },
{ key: 'gulf', tab: 'international', intl: 'gulf' },
{ key: 'europe', tab: 'international', intl: 'europe' },
{ key: 'umrah', tab: 'umrah' },
{ key: 'flights' }];


export function Footer() {
  const { t, lang } = useLanguage();
  const { goToTrips } = useBooking();
  const linkClass = 'text-white/75 transition-colors duration-200 hover:text-gold-light';

  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      <div aria-hidden="true" className="bg-pattern-dark absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Brand onDark size="lg" />
            <p className="mt-5 max-w-xs text-[15px] text-white/75">{t.footer.about}</p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-bold text-gold-light">{t.footer.language}</p>
              <LanguageSwitcher variant="full" tone="dark" />
            </div>
          </div>

          <FooterColumn title={t.footer.quickLinks}>
            {footerQuickLinks.map((key) =>
            <li key={key}>
                <a href={`#${key}`} className={linkClass}>
                  {t.nav[key]}
                </a>
              </li>
            )}
          </FooterColumn>

          <FooterColumn title={t.footer.services}>
            {serviceLinks.map((s) =>
            <li key={s.key}>
                <button
                type="button"
                onClick={() => s.tab ? goToTrips(s.tab, s.intl) : scrollToSection('services')}
                className={`${linkClass} text-start`}>
                
                  {t.footer.serviceLinks[s.key]}
                </button>
              </li>
            )}
          </FooterColumn>

          <FooterColumn title={t.footer.contact}>
            <li>
              <a href={contact.phoneHref} className={`${linkClass} flex items-center gap-2`}>
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {t.footer.call}: <Ltr>{contact.phoneDisplay}</Ltr>
              </a>
            </li>
            <li>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center gap-2`}>
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
                {t.footer.whatsapp}: <Ltr>{contact.whatsappDisplay}</Ltr>
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/75">
              <MailIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {t.footer.email}:{' '}
              {contact.email ?
              <a href={`mailto:${contact.email}`} className={linkClass}>
                  <Ltr>{contact.email}</Ltr>
                </a> :

              <Ltr>
                  <PlaceholderText text={contact.emailPlaceholder} />
                </Ltr>
              }
            </li>
            <li className="flex items-start gap-2 text-white/75">
              <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {t.footer.address}: <PlaceholderText text={t.contact.addressValue} />
              </span>
            </li>
            <li className="flex gap-2 pt-2">
              <FooterSocial href={contact.social.facebook} label={t.contact.facebook}>
                <FacebookIcon className="h-4 w-4" />
              </FooterSocial>
              <FooterSocial href={contact.social.instagram} label={t.contact.instagram}>
                <InstagramIcon className="h-4 w-4" />
              </FooterSocial>
              <FooterSocial href={contact.social.tiktok} label={t.contact.tiktok}>
                <TikTokIcon className="h-4 w-4" />
              </FooterSocial>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2 text-sm text-white/65">
            <p>{t.footer.rights}</p>
            <p>
              <PlaceholderText text={t.footer.license} />
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {/* TODO: link to the real policy pages once written */}
            <a href="#" className={linkClass}>
              {t.footer.privacy}
            </a>
            <a href="#" className={linkClass}>
              {t.footer.terms}
            </a>
            <a href="#" className={linkClass}>
              {t.footer.cancellation}
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              aria-label={t.a11y.backToTop}
              lang={lang}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink shadow-gold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              
              <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>);

}

function FooterColumn({ title, children }: {title: string;children: React.ReactNode;}) {
  return (
    <div>
      <h2 className="text-base font-extrabold text-white">{title}</h2>
      <span aria-hidden="true" className="mt-3 block h-0.5 w-10 rounded-full bg-gold" />
      <ul className="mt-5 space-y-3 text-[15px]">{children}</ul>
    </div>);

}

function FooterSocial({ href, label, children }: {href: string;label: string;children: React.ReactNode;}) {
  const external = href !== '#';
  return (
    <a
      href={href}
      aria-label={label}
      {...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-gold hover:text-ink">
      
      {children}
    </a>);

}