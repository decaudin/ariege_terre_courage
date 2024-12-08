import { useState } from "react";

const useSubmitForm = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const submitForm = async (data) => {
        setIsLoading(true);
        setIsError(false);
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
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
