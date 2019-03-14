import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h3>Welcome to your Vinyl Vault</h3>
        <p>Your home for cataloging your vinyl record collection</p>
        <Link to="/albums"><Button waves='light'>View Collection<Icon left>library_music</Icon></Button></Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/albums/new"><Button waves='light'>Add Album<Icon left>library_add</Icon></Button></Link>
        <br />
        <br />
        <img className="responsive-img" src="https://static1.squarespace.com/static/5582bc25e4b01f59c2b43b16/t/558b5812e4b0b8204ec79f0f/1435195411451/vinylrow.jpg?format=1000w" alt="shelvedrecords"/>
      </div>
    </div>
  );
}

export default Home
