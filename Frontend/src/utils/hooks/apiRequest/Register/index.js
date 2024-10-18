import { useState } from 'react';

// HOOK POUR S'ENREGISTRER

export const useRegister = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const registerUser = async (formData) => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { registerUser, isLoading, isError };
};
