import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";

i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                'key': 'Hello',
                'aaa': 'help',
            }
        },
        es: {
            translation: {
                'key': 'Hola',
                'aaa': 'aiuda',
            }
        }
    }
})