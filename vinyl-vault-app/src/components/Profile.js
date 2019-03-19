import React from 'react';
import '../App.css';

const Profile = (albums) => {
  return (
    <div className="profile">
      <div className="container">
        <h3>Welcome to your Vinyl Vault</h3>
        <p>You currently have {albums.albums.length} albums in your collection.</p>
      </div>
    </div>
  );
}

export default Profile
