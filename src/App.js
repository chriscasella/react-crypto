import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Coin from './containers/Coin/Coin';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:coin" exact component={Coin} />
      </Switch>
    );
  }
}

export default App;
