import { useState, useCallback } from "react";

const useFetchComments = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const fetchComments = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await fetch(url, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des commentaires');
            }

            const result = await response.json();
            setData(result);
        } catch (error) {
            setIsError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return { fetchComments, isLoading, isError, data };
};

export default useFetchComments;
