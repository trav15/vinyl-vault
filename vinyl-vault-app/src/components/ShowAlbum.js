import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Col, Button, Icon, Input, Card, CardTitle} from 'react-materialize'

class ShowAlbum extends Component {
  render() {

    const album = this.props;
    console.log(album)
    
    return (
      <li className="album" album={album} key={album.id}>
        <Col s={12} m={6}>
          <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
              title = {album.title}
              reveal={ <button className="deleteAlbumBtn" onClick={(e) => this.deleteAlbum(album.id)}>Remove Album</button>}>
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
