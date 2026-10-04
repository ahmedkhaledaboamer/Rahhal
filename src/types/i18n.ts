export type Lang = 'ar' | 'en';
export type Dir = 'rtl' | 'ltr';

/** A string that exists in both site languages. */
export type Localized = Record<Lang, string>;

/** A list of strings that exists in both site languages. */
export type LocalizedList = Record<Lang, string[]>;