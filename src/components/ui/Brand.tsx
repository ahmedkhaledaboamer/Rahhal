import { useLanguage } from '../../contexts/LanguageContext';
import { images } from '../../data/images';

type BrandProps = {
  /** On dark backgrounds the sticker logo sits on a white rounded badge. */
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
};

const logoSize = { sm: 'h-10', md: 'h-12 md:h-14', lg: 'h-20' };

export function Brand({ onDark = false, size = 'md', href = '#home', onClick }: BrandProps) {
  const { lang, t } = useLanguage();
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={t.brand.homeLink}
      className="inline-flex shrink-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      
      <span className={onDark ? 'rounded-2xl bg-white p-1.5 shadow-soft' : ''}>
        <img src={images.logo} alt={t.brand.logoAlt} width={309} height={320} decoding="async" className={`${logoSize[size]} w-auto object-contain`} />
      </span>
      {lang === 'en' &&
      <span className="leading-tight">
          <span className={`block text-lg font-extrabold ${onDark ? 'text-white' : 'text-primary-dark'}`}>Rahhal</span>
          <span className={`block text-xs font-medium ${onDark ? 'text-white/70' : 'text-ink/60'}`}>
            Travel &amp; Tourism
          </span>
        </span>
      }
    </a>);

}