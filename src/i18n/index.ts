import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt_BR from "./locales/pt-BR.json";
import pt_PT from "./locales/pt-PT.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import ar from "./locales/ar.json";
import nl from "./locales/nl.json";
import zh from "./locales/zh.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";
import de from "./locales/de.json";
import ru from "./locales/ru.json";

export const languages = [
  { code: "pt-BR", name: "Português (Brasil)", flag: "🇧🇷" },
  { code: "pt-PT", name: "Português (Portugal)", flag: "🇵🇹" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: pt_BR },
      "pt-PT": { translation: pt_PT },
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      it: { translation: it },
      ar: { translation: ar },
      nl: { translation: nl },
      zh: { translation: zh },
      ko: { translation: ko },
      ja: { translation: ja },
      de: { translation: de },
      ru: { translation: ru },
    },
    fallbackLng: "pt-BR",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
