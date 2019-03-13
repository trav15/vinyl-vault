import React, { Component } from 'react';
import './App.css';
import VaultContainer from './components/VaultContainer'
import {Icon} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Vinyl Vault<Icon medium>album</Icon></h1>
        </div>
        <VaultContainer />
      </div>
    );
  }
}

export default App;
