import type { InitOptions } from 'i18next';

export const fallbackLng = 'ko';
export const locales = [
  fallbackLng,
  'en',
  'ja',
  'de',
  'br',
  'id',
  'tr',
  'mx',
] as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common';

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
