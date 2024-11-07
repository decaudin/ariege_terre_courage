import { useState } from 'react';

// HOOK POUR S'ENREGISTRER

export const useRegister = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const registerUser = async (formData) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Registration failed');
            }
            return true;
        } catch (error) {
            setIsError(true);
            console.error(error.message || error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { registerUser, isError, isLoading };
};
