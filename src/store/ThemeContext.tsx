'use client';
import { createContext, ReactElement, useEffect, useState } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
});

type ThemeProps = {
  children?: JSX.Element | Array<JSX.Element>;
};

export const ThemeContextProvider = (props: ThemeProps): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const initialThemeHandler = (): void => {
      if (isLocalStorageEmpty()) {
        localStorage.setItem('isDarkTheme', `false`);
        setIsDarkTheme(false);
      } else {
        const storedTheme: boolean = JSON.parse(
          localStorage.getItem('isDarkTheme')!
        );
        if (storedTheme) {
          document!.querySelector('html')!.classList.add('dark');
        }
        setIsDarkTheme(storedTheme);
      }
    };
    initialThemeHandler();
  }, []);

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('isDarkTheme');
  };

  const toggleThemeHandler = (): void => {
    setIsDarkTheme((prev) => !prev);
    toggleDarkClassToHTML();
    setValueToLocalStorage();
  };

  const toggleDarkClassToHTML = (): void => {
    document!.querySelector('html')!.classList.toggle('dark');
  };

  const setValueToLocalStorage = (): void => {
    localStorage.setItem('isDarkTheme', JSON.stringify(!isDarkTheme));
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
