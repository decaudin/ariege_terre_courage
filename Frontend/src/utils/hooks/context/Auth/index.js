import { useContext } from 'react';
import { AuthContext } from '../../../context/Auth';

// HOOK POUR CONSOMMER LE CONTEXT DE L'AUTHENTIFICATION

export const useAuth = () => {
    const { user, login, logout } = useContext(AuthContext)
    return { user, login, logout }
}