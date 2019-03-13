import React from 'react';
import '../App.css'
import {Icon} from 'react-materialize'
import VaultContainer from './VaultContainer'

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Vinyl Vault<Icon medium>album</Icon></h1>
      </div>
      <div className="container">
        <VaultContainer />
      </div>
    </div>
  );
}

export default Home
