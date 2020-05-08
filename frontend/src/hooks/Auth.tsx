import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
    user: object;
    token: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    login(credentials: LoginCredentials): Promise<void>;
    logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@gobarber:user');
        const token = localStorage.getItem('@gobarber:token');

        if (user && token) {
            return { user: JSON.parse(user), token };
        }

        return {} as AuthState;
    });

    const login = useCallback(async ({ email, password }) => {
        const response = await api.post('/sessions', {
            email,
            password,
        });

        const { user, token } = response.data;

        localStorage.setItem('@gobarber:user', JSON.stringify(user));
        localStorage.setItem('@gobarber:token', token);

        setData({ user, token });
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('@gobarber:user');
        localStorage.removeItem('@gobarber:token');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
