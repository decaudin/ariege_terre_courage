import { useState } from "react";

const useSubmitForm = (url) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const submitForm = async (data) => {
        setLoading(true);
        setError(false);
        
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
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { submitForm, loading, error };
};

export default useSubmitForm;
