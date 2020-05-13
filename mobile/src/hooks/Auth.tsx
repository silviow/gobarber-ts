import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { api } from '../services/api';

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
    loading: boolean;
    login(credentials: LoginCredentials): Promise<void>;
    logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData(): Promise<void> {
            const [user, token] = await AsyncStorage.multiGet([
                '@gobarber:user',
                '@gobarber:token',
            ]);

            if (user[1] && token[1]) {
                setData({ user: JSON.parse(user[1]), token: token[1] });
            }

            setLoading(false);
        }

        loadStoragedData();
    }, []);

    const login = useCallback(async ({ email, password }) => {
        const response = await api.post('/sessions', {
            email,
            password,
        });

        const { user, token } = response.data;

        await AsyncStorage.multiSet([
            ['@gobarber:user', JSON.stringify(user)],
            ['@gobarber:token', token],
        ]);

        setData({ user, token });
    }, []);

    const logout = useCallback(async () => {
        await AsyncStorage.multiRemove(['@gobarber:user', '@gobarber:token']);

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
            value={{ user: data.user, loading, login, logout }}
        >
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
