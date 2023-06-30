import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en.json";
import ptBR from "../locales/pt-BR.json";

export type Language = "en" | "pt-BR";

export interface I18nResources {
  [language: string]: {
    translation: Resource;
  };
}

const resources: I18nResources = {
  en: { translation: en },
  "pt-BR": { translation: ptBR },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "pt-BR"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
