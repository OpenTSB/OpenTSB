import {defineRouting} from 'next-intl/routing';
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, SHOW_LOCALE_PREFIX } from '../../config/i18n';

export const routing = defineRouting({
    locales: AVAILABLE_LOCALES,
    localePrefix: SHOW_LOCALE_PREFIX ? "always" : "never",
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: true,
});
