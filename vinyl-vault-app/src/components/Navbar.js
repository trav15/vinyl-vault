import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

const VaultNavbar = () => {
  return (
    <div className="header">
      <Navbar brand="Vinyl Vault" left>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/new">Add Album</Link></NavItem>
      </Navbar>
    </div>
  );
}

export default VaultNavbar;
