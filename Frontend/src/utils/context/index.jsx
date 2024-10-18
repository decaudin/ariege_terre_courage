import { useState, createContext } from "react";
import { useHikesData } from "../hooks/apiRequest/Hikes";

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

  const { data, isLoading } = useHikesData('/Data/data.json');
  
  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};
  
