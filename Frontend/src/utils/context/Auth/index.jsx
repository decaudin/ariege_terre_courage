import { createContext, useState } from 'react';

// CONTEXT POUR L'AUTHENTIFICATION

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const userId = localStorage.getItem('userId') || sessionStorage.getItem('userId');
        const userName = localStorage.getItem('userName') || sessionStorage.getItem('userName');
        return token && userId && userName ? { token, id: userId, name: userName } : null;
    });

    const login = (token, userId, userName, rememberMe) => {  
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('token', token);
        storage.setItem('userId', userId);
        storage.setItem('userName', userName);
        setUser({ token, id: userId, name: userName }); 
    };

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
