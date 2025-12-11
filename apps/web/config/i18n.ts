export const AVAILABLE_LOCALES = [
    "en",
    "hi"
] as const;

export type Locale = typeof AVAILABLE_LOCALES[number];

export const DEFAULT_LOCALE: Locale = "en" as Locale;

export const SHOW_LOCALE_PREFIX: Boolean = false;

export const TRANSLATION_FILES = [
    "admin/dashboard.json",
    "admin/settings.json",
    "common.json",
    "register.json",
    "login.json",
    "profile.json"
] as const;
