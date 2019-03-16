import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { loadAlbum } from '../actions/actionCreators'
import { Col, Card, CardTitle , Button } from 'react-materialize'
import ShowAlbum from './ShowAlbum'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class AlbumShow extends Component {

  getAlbum(albumId) {
    axios.get(`/api/vault/albums/${albumId}`)
    .then(response => {
      this.props.dispatch(loadAlbum(response.data));
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getAlbum(this.props.match.params.albumId);
	}

  render() {
    // console.log(this.props.match.params.albumId)
    const album = this.props.album
    console.log(album)
    // const genericCoverURL = "http://canaanmedia.com/wp-content/uploads/2014/09/12.jpg"
    // album.cover_url = album.cover_url == "" ?  genericCoverURL : album.cover_url

    return (
      <div className="album">
        <Col s={12} m={3}>
          <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
              title = {album.title}
              reveal={ <div><p>{album.notes}</p><Button waves='light' className="deleteAlbumBtn" onClick={(e) => this.props.deleteAlbum(album.id)}>Remove Album</Button></div>}>
              <p>{album.artist}</p>
          </Card>
        </Col>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		album: state.albums
	}
}

export default connect(mapStateToProps)(AlbumShow);
