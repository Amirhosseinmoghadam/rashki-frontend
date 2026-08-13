import {
  createContext,
  useEffect,
  useState,
} from "react";


export const ThemeContext = createContext();


export function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  });


  useEffect(() => {

    const root =
      document.documentElement;


    if (darkMode) {

      root.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      root.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

    }

  }, [darkMode]);


  function toggleTheme() {

    setDarkMode(
      (current) => !current
    );

  }


  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}