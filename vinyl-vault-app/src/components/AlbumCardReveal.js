import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'

const AlbumCardReveal = ({album, albumURL}) => (
    <div>
      <p>{album.notes}</p>
      <Link to={albumURL}><Button waves='light' className="editAlbumBtn">Edit Album</Button></Link>
      <Button waves='light' className="deleteAlbumBtn" onClick={(e) => this.props.deleteAlbum(album.id)}>Remove Album</Button>
    </div>
)

export default AlbumCardReveal;
