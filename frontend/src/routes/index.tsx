import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
    </Switch>
);

export default Routes;
