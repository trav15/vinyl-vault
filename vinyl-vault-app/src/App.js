import React, { Component } from 'react';
import './App.css';
import VaultContainer from './components/VaultContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Vinyl Vault</h1>
        </div>
        <VaultContainer />
      </div>
    );
  }
}

export default App;
