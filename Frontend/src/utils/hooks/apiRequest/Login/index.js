import { useState } from 'react';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const loginUser = async (credentials) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            // Stocker le token ou gérer la session
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { loginUser, isLoading, isError };
};
