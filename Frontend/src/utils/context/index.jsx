import React, { useState, createContext } from "react";
import { useFetch } from "../hooks";

// CONTEXTE POUR LE THEME (JOUR/NUIT)

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// CONTEXT POUR LES RANDONNEES

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const { data } = useFetch('/Data/salau.json');
  
    return (
      <DataContext.Provider value={{ data }}>
        {children}
      </DataContext.Provider>
    );
  };
  
