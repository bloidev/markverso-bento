// create a zustand store for theme control
import {create} from "zustand";

type Theme = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialTheme = () => {
    if (typeof window !== "undefined") {
        const theme = window.localStorage.getItem("theme");
        document.body.classList.toggle('dark', theme == 'dark');  
        return theme ? theme : "light";
    }
    return "dark";
};

const useTheme = create<Theme>((set) => ({
  theme: initialTheme(),
  setTheme: (theme) =>
    set((state) => {       
        window.localStorage.setItem("theme", theme);
        //
        document.body.classList.toggle('dark', theme == 'dark');  
      return { theme: state.theme == "light" ? "dark" : "light"};
    }),
}));

export default useTheme;
