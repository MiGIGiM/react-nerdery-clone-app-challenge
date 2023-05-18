import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import users from '../shared/db/user.json';
import { useNavigate } from 'react-router-dom';

const authContextDefaults: AuthContext = {
    user: null,
    login: async () => {},
    logout: () => {},
    error: '',
    setError: () => {},
};

const AuthContext = createContext<AuthContext>(authContextDefaults);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [storedUser, setStoredUser] = useLocalStorage<User | null>(
        'user',
        null,
    );
    const login = ({ email, password }: UserLogin) => {
        const user = users.find(
            (user) => user.email === email && user.password === password,
        );
        if (!user) {
            throw new Error('Incorrect username or password.');
        }

        setStoredUser(user);
        navigate('/');
    };

    const logout = () => {
        setStoredUser(null);
    };

    const value = {
        user: storedUser,
        login,
        logout,
        error,
        setError,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export function useAuthContext() {
    return useContext(AuthContext);
}
