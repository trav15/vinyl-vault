import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Button } from 'react-materialize'
import AlbumForm from './AlbumForm'

class EditAlbum extends Component {
  render() {

    const album = this.props.currentalbum;
    const genericCoverURL = "http://canaanmedia.com/wp-content/uploads/2014/09/12.jpg"
    album.cover_url = album.cover_url === "" ?  genericCoverURL : album.cover_url

    return (
      <li className="album">
        <Col>
          <img src={album.cover_url} alt="album cover" />
          <h3>{album.title}</h3>
          <h4>{album.artist}</h4>
          <p>{album.notes}</p>
              <AlbumForm album={album} />
              <div>
                <Button waves='light' className="deleteAlbumBtn" onClick={(e) => this.props.deleteAlbum(album.id)}>Remove Album</Button>
              </div>
        </Col>
      </li>
    )
  }
}

const mapStateToProps = state => {
	return {
		album: state.album
	}
}

export default connect(mapStateToProps)(EditAlbum);
