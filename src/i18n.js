import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      regButtonText: "Registration",
      linkToHome: "Home",
      changeLanguageButtonRu: "RU",
      changeLanguageButtonEn: "EN",
    },
  },
  ru: {
    translation: {
      regButtonText: "Регистрация",
      linkToHome: "Домой",
      changeLanguageButtonRu: "РУ",
      changeLanguageButtonEn: "АНГЛ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
});

export default i18n;
