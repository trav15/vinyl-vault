import React from 'react';
import '../App.css'
import {Icon} from 'react-materialize'
import VaultContainer from './VaultContainer'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <VaultContainer />
      </div>
    </div>
  );
}

export default Home
