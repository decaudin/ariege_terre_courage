import { useContext } from 'react';
import { ThemeContext, DataContext } from '../../context';

// HOOK POUR LE CONTEXT DU THEME

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}

// HOOK POUR LE CONTEXT DES RANDONNEES

export const useData = () => {
    const { data, isLoading, isError } = useContext(DataContext)
    return { data, isLoading, isError }
}