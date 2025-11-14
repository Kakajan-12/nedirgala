import { create } from "zustand";

/**
 * Zustand store for managing the application's language state.
 *
 * @property {string} language - The current language code (e.g., 'tm', 'en', 'ru').
 * @property {function(string): void} setLanguage - Action to set a new language.
 */
export const useLanguageStore = create((set) => ({
    // You can initialize this from a cookie or a default value
    language: "tm",
    setLanguage: (lang) => set({ language: lang }),
}));
