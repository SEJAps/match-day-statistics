import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "es-ES",
    defaultNS: ["translation", "default"],
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
  });

export default i18n;
