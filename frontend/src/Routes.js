import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/home';
import UserCrud from './pages/user';

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>
)