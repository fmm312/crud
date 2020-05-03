import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Users';

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
    </Switch>
)