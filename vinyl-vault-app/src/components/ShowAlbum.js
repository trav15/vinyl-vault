import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Card, CardTitle , Button } from 'react-materialize'

class ShowAlbum extends Component {
  render() {

    const album = this.props.currentalbum;

    return (
      <li className="album">
        <Col s={12} m={3}>
          <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
              title = {album.title}
              reveal={ <Button waves='light' className="deleteAlbumBtn" onClick={(e) => this.deleteAlbum(album.id)}>Remove Album</Button>}>
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

export default connect(mapStateToProps)(ShowAlbum);
