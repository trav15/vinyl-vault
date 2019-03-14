import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

const VaultNavbar = () => {
  return (
    <div className="header">
      <Navbar brand="Vinyl Vault" left>
        <Link to="/"><NavItem>Home</NavItem></Link>
        <Link to="/new"><NavItem>Add Album</NavItem></Link>
        <Link to="/album"><NavItem>Show Album</NavItem></Link>
      </Navbar>
    </div>
  );
}

export default VaultNavbar;
