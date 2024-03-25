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

// CONTEXTE POUR LES RANDONNEES

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const { data, isLoading } = useFetch('/Data/data.json');
  
    return (
      <DataContext.Provider value={{ data, isLoading }}>
        {children}
      </DataContext.Provider>
    );
  };
  
