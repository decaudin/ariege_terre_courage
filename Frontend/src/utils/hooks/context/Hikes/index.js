import { useContext } from 'react';
import { DataContext } from '../../../context/Hikes';

// HOOK POUR CONSOMMER LE CONTEXT DES RANDONNEES

export const useData = () => {
    const { data, isLoading, isError } = useContext(DataContext)
    return { data, isLoading, isError }
}