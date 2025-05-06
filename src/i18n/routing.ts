// https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-routing

import { defineRouting } from 'next-intl/routing';

export const locales = [
  'en',
  'ca',
  'es',
  'fr',
  'it',
  'sl',
  'tr',
  'uk',
  'ko',
  'nl',
  'ru',
  'be',
  'zh-CN',
  'fi',
  'de',
  'el',
  'hi',
  'ja',
  'lv',
  'pt',
  'et',
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
});
