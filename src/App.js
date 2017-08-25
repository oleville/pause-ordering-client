import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Client from './views/client';
import Kitchen from './views/kitchen';
import Admin from './views/admin';
import './App.css';

const App = () => {
    return (
      <Switch>
        <Route exact path="/" component={Client}/>
        <Route path="/kitchen" component={Kitchen}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    );
}

export default App;
