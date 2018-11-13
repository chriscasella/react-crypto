import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Coin from './containers/Coin/Coin';
import Navbar from './components/Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAngleleft } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faHome);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:coin" exact component={Coin} />
        </Switch>
      </div>
    );
  }
}

export default App;
