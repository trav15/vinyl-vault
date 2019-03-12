import React, { Component } from 'react';
import './App.css';
import VaultContainer from './components/VaultContainer'
import {Button, Icon} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Vinyl Vault</h1>
        </div>
        <VaultContainer />
        <Button waves='light'>Add Record<Icon left>album</Icon></Button>
      </div>
    );
  }
}

export default App;
