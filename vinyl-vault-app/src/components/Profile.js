import React from 'react';
import '../App.css';

const Profile = (albums) => {
  return (
    <div className="profile">
      <div className="container">
        <h4>Your Vinyl Vault collection</h4>
        <p>You currently have {albums.albums.length} albums in your collection.</p>
      </div>
    </div>
  );
}

export default Profile
