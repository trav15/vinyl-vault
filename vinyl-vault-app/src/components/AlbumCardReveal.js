import React from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom';

const AlbumCardReveal = ({album, deleteAlbum}) => (
    <div>
      <p>{album.notes}</p>
      <Link to={`/albums/${album.id}`}><Button waves='light'>Edit Album</Button></Link>
      <Button waves='light' className="deleteAlbumBtn" onClick={(e) => deleteAlbum(album.id)}>Remove Album</Button>
    </div>
)

export default AlbumCardReveal;
