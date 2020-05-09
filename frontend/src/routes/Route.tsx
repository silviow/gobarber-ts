import React from 'react';
import {
    Route as ReactRoute,
    RouteProps as ReactRouteProps,
    Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactRouteProps {
    privateRoute?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
    privateRoute = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();

    return (
        <ReactRoute
            {...rest}
            render={({ location }): React.ReactElement => {
                return privateRoute === !!user ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: privateRoute ? '/' : '/dashboard',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
