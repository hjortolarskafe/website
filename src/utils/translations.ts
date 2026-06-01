// src/utils/translations.ts

export const navTranslations = {
  sv: {
    about: "Om oss",
    menu: "Meny",
    goodToKnow: "Bra att veta",
    openingHours: "Öppettider",
    afternoonTea: "Afternoon Tea",
    booking: "Boka",
    location: "Hitta hit",
    language: "Språk",
    monday: "Måndag",
    tuesday: "Tisdag",
    wednesday: "Onsdag",
    thursday: "Torsdag",
    friday: "Fredag",
    saturday: "Lördag",
    sunday: "Söndag",
  },
  en: {
    about: "About us",
    menu: "Menu",
    goodToKnow: "Good to know",
    openingHours: "Opening Hours",
    afternoonTea: "Afternoon Tea",
    booking: "Booking",
    location: "Find us here",
    language: "Language",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  },
  de: {
    about: "Über uns",
    menu: "Menü",
    goodToKnow: "Gut zu wissen",
    openingHours: "Öffnungszeiten",
    afternoonTea: "Afternoon Tea",
    booking: "Buchen",
    location: "Hier findest du uns",
    language: "Sprache",
    monday: "Montag",
    tuesday: "Dienstag",
    wednesday: "Mittwoch",
    thursday: "Donnerstag",
    friday: "Freitag",
    saturday: "Samstag",
    sunday: "Sonntag",
  },
} as const;

// This is the helper function you will import into your pages
export function getTranslations(lang: string) {
  return navTranslations[lang as keyof typeof navTranslations] || navTranslations["sv"];
}