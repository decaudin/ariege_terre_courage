import { useState } from 'react';

// HOOK POUR S'ENREGISTRER

export const useSignUp = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const errorMessages = {
        'Failed to fetch': 'Problème de connexion au serveur. Veuillez réessayer plus tard.',
        'NetworkError': 'Problème de connexion au serveur. Veuillez réessayer plus tard.',
        "Nom d'utilisateur déjà pris": "Nom d'utilisateur déjà pris.",
        "E-mail déjà utilisé": "E-mail déjà utilisé.",
    };

    const signUpUser = async (formData) => {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");

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
            const message = errorMessages[error.message] || 'Une erreur est survenue lors de l\'enregistrement.';
            setErrorMessage(message);
            setIsError(true);
            console.error(error.message || error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { signUpUser, isError, isLoading, errorMessage };
};
