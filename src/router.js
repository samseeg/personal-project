import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Category from './components/Main/Category/Category';
import Posts from './components/Main/Category/Posts/Posts';
import Profile from './components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/main/category/:id' component={Category} />
        <Route path='/main/category/:id/posts/:id' component={Posts} />
        <Route path='/profile' component={Profile} />
    </Switch>
)