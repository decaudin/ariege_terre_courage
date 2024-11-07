import { createContext } from "react";
import { useHikesData } from "../../hooks/apiRequest/Hikes";

// CONTEXT POUR LES RANDONNEES

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const { data, isLoading } = useHikesData('/Data/data.json');
  
  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};