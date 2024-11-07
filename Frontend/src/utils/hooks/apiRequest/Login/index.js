import { useState } from 'react';
import { useAuth } from '../../context/Auth';

// HOOK POUR SE CONNECTER

export const useLogin = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { login } = useAuth();

    const loginUser = async (formData) => {
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
                throw new Error('Login failed');
            }
            const data = await response.json();
            login(data.token, data.userId, data.userName);
            return true; 
        } catch (error) {
            setIsError(true);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { loginUser, isError, isLoading };
};
