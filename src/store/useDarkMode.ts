import { create } from "zustand";

type DarkModeType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const useDarkMode = create<DarkModeType>((set) => ({
  darkMode: localStorage.getItem("darkMode") === "true",
  toggleDarkMode: () =>
    set((state) => {
      document.documentElement.classList.toggle("dark", !state.darkMode);
      localStorage.setItem("darkMode", (!state.darkMode).toString());
      return { darkMode: !state.darkMode };
    }),
}));
