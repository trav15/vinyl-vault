import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

const VaultNavbar = () => {
  return (
    <div className="header">
      <Navbar brand="Vinyl Vault" left>
        <Link to="/"><NavItem>Home</NavItem></Link>
        <Link to="/albums"><NavItem>Collection</NavItem></Link>
        <Link to="/albums/new"><NavItem>Add Album</NavItem></Link>
        <Link to="profile"><NavItem>Your Profile</NavItem></Link>
      </Navbar>
    </div>
  );
}

export default VaultNavbar;
