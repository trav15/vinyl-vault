import React from 'react'
import { Button } from 'react-materialize'

const AlbumCardReveal = ({album, deleteAlbum}) => (
    <div>
      <p>{album.notes}</p>
      <Button waves='light' className="deleteAlbumBtn" onClick={(e) => deleteAlbum(album.id)}>Remove Album</Button>
    </div>
)

export default AlbumCardReveal;
