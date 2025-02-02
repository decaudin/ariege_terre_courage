import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSubmitForm = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    
    const submitForm = async (data) => {
        setIsLoading(true);
        setIsError(false);

        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        if (!token) {
            console.error("Aucun token trouvé. Requête bloquée.");
            navigate('/login');
            return;
        }
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: data,
            });
            
            if (!response.ok) {
                throw new Error('Erreur lors de la soumission du formulaire');
            }
            
            const result = await response.json();
            return result;
        } catch (err) {
            setIsError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { submitForm, isLoading, isError };
};

export default useSubmitForm;
