import { useContext, useState, useEffect } from 'react';
import { ThemeContext, DataContext } from '../context';

// HOOK POUR LE CONTEXT DU THEME

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}

// HOOK POUR RECUPERER LES DONNEES

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!url) return
        setIsLoading(true);  

        const fetchData = async () => {

            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data); 
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url])

    return { data, isLoading }
}

// HOOK POUR LE CONTEXT DES RANDONNEES

export const useData = () => {
    const { data, isLoading } = useContext(DataContext)
    return { data, isLoading }
}