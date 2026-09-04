/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useLayoutEffect, useState } from "react";
import colors from "../colors";

// interface ThemeProviderProps {
//   children: React.ReactNode;
// }

/** @type {React.Context<{ theme: string, toggleTheme: () => void, colorValues: { backgroundColor: string, textColor: string, accentColor_1: string, accentColor_2: string } } | undefined>} */

const ThemeContext = createContext(undefined);

export const DevLinkThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const colorValuesByTheme = {
    light: {
      backgroundColor: colors.white,
      textColor: colors.black,
      accentColor_1: colors.pink,
      accentColor_2: colors.orange,
      buttonColor: colors.black,
      buttonColorText: colors.white,
    },

    dark: {
      backgroundColor: colors.black,
      textColor: colors.white,
      accentColor_1: colors.pink,
      accentColor_2: colors.orange,
      buttonColor: colors.pink,
      buttonColorText: colors.black,
    },
  };

  const colorValues = colorValuesByTheme[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colorValues,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
