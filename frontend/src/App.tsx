import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProviders from './hooks';

const App: React.FC = () => (
    <>
        <AppProviders>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AppProviders>
        <GlobalStyle />
    </>
);

export default App;
