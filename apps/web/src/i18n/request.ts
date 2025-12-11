import { getRequestConfig } from "next-intl/server";
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, Locale } from "../../config/i18n";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const locales = AVAILABLE_LOCALES;

export default getRequestConfig(async ({requestLocale}) => {
   // const store = await cookies();
    //const locale = store.get('locale')?.value as Locale || DEFAULT_LOCALE;

    //if (!locales.includes(locale as Locale)) notFound();

    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const common = await import(`../../public/locales/${locale}/common.json`); 
    /**const dashboard = await import(`../../public/locales/${locale}/admin/dashboard.json`); 
    const settings = await import(`../../public/locales/${locale}/admin/settings.json`); 
    const register = await import(`../../public/locales/${locale}/register.json`); 
    const login = await import(`../../public/locales/${locale}/login.json`); 
    const profile = await import(`../../public/locales/${locale}/profile.json`); 
**/
    return { 
        locale,
        messages: { 
            ...common.default, 
        },
    };
});
