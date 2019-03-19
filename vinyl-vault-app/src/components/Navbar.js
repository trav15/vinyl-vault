import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-materialize';

const VaultNavbar = () => {
  return (
    <div className="header">
      <Navbar brand="Vinyl Vault" left>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/albums">Collection</NavLink></li>
        <li><NavLink to="/albums/new">Add Album</NavLink></li>
      </Navbar>
    </div>
  );
}

export default VaultNavbar;
