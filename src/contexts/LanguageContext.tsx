import React, { createContext, startTransition, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { ar, type Dictionary } from '../locales/ar';
import { en } from '../locales/en';
import type { Dir, Lang, Localized } from '../types/i18n';

type LanguageContextValue = {
  lang: Lang;
  dir: Dir;
  isRTL: boolean;
  /** +1 in LTR, -1 in RTL — multiply framer-motion x offsets by this. */
  sign: 1 | -1;
  t: Dictionary;
  pick: (value: Localized) => string;
  setLang: (next: Lang) => void;
};

const STORAGE_KEY = 'rahhal-lang';
/** Arabic is the default. Set to true to use the browser language on a visitor's very first visit. */
const USE_BROWSER_LANGUAGE_ON_FIRST_VISIT = false;
const dictionaries: Record<Lang, Dictionary> = { ar, en };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const t = dictionaries[lang];
  const dir: Dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Before paint, so the new language never shows for a frame in the old direction.
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    document.title = t.meta.title;
    setMeta('name', 'description', t.meta.description);
    setMeta('property', 'og:title', t.meta.title);
    setMeta('property', 'og:description', t.meta.description);
    setMeta('property', 'og:locale', t.meta.ogLocale);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', "/logo-og.png");
    setMeta('name', 'twitter:card', 'summary_large_image');
    setAlternateLinks();
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url.toString());
    } catch {

      /* storage or history may be unavailable (e.g. sandboxed iframe) */}
  }, [lang, dir, t]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      // A transition keeps the current page on screen while the other language renders,
      // then swaps in one frame — no blank page in between.
      const commit = () => startTransition(() => setLangState(next));
      // English uses Inter, which isn't loaded on an Arabic visit: fetch it first (max 500 ms) to avoid a font swap.
      if (next === 'en' && document.fonts) {
        Promise.race([
        document.fonts.load('400 1em Inter'),
        new Promise((resolve) => window.setTimeout(resolve, 500))]
        ).finally(commit);
      } else {
        commit();
      }
    },
    [lang]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      isRTL: dir === 'rtl',
      sign: dir === 'rtl' ? -1 : 1,
      t,
      pick: (v: Localized) => v[lang],
      setLang
    }),
    [lang, dir, t, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}

function getInitialLang(): Lang {
  try {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'ar' || param === 'en') return param;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ar' || saved === 'en') return saved;
    if (USE_BROWSER_LANGUAGE_ON_FIRST_VISIT && navigator.language?.toLowerCase().startsWith('en')) return 'en';
  } catch {

    /* ignore */}
  return 'ar';
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setAlternateLinks() {
  const base = `${window.location.origin}${window.location.pathname}`;
  const entries: Array<[string, string]> = [
  ['ar', `${base}?lang=ar`],
  ['en', `${base}?lang=en`],
  ['x-default', base]];

  entries.forEach(([hreflang, href]) => {
    let link = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      document.head.appendChild(link);
    }
    link.href = href;
  });
}