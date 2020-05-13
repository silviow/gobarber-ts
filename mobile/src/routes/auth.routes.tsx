import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#090909' },
        }}
    >
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
);

export default AuthRoutes;
