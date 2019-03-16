import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Card, CardTitle , Button } from 'react-materialize'

class AlbumCard extends Component {
  render() {

    const album = this.props.currentalbum;
    const genericCoverURL = "http://canaanmedia.com/wp-content/uploads/2014/09/12.jpg"
    album.cover_url = album.cover_url == "" ?  genericCoverURL : album.cover_url

    return (
      <li className="album">
        <Col s={12} m={3}>
          <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
              title = {album.title}
              reveal={ <div><p>{album.notes}</p><Button waves='light' className="deleteAlbumBtn" onClick={(e) => this.props.deleteAlbum(album.id)}>Remove Album</Button></div>}>
              <p>{album.artist}</p>
          </Card>
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

export default connect(mapStateToProps)(AlbumCard);
