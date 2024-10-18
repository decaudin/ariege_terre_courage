import { useEffect, useState } from "react";

// HOOK POUR RECUPERER LES DONNEES DES RANDONNEES

export const useHikesData = (url) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        if (!url) return
        setIsLoading(true); 

        const fetchHikes = async () => {

            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHikes();
    }, [url]);

    return { data, isLoading, isError };
};
