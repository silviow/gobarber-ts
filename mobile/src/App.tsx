import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import AppProviders from './hooks';
import Routes from './routes';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#090909" />
        <AppProviders>
            <View style={{ flex: 1, backgroundColor: '#090909' }}>
                <Routes />
            </View>
        </AppProviders>
    </NavigationContainer>
);

export default App;
