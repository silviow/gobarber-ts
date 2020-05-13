import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    useEffect(() => {
        const sessionTimer = setTimeout(() => {
            logout();
            Alert.alert('Session timeout (10s)', 'You have been logged out.');
        }, 10000);
        return (): void => clearTimeout(sessionTimer);
    }, [logout]);

    return <View style={{ flex: 1 }} />;
};

export default Dashboard;
