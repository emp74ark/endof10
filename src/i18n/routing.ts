// https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-routing

import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de'],

  // Used when no locale matches
  defaultLocale: 'en'
});
