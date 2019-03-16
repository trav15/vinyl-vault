import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { loadAlbum, editAlbum } from '../actions/actionCreators'
import { Col, Card, CardTitle , Button } from 'react-materialize'
import AlbumInfo from '../components/AlbumInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ShowAlbumContainer extends Component {

  getAlbum(albumId) {
    axios.get(`/api/vault/albums/${albumId}`)
    .then(response => {
      this.props.dispatch(loadAlbum(response.data));
    })
    .catch(error => console.log(error))
  }

  editAlbum = (e, id) => {
    axios.put(`/api/vault/albums/${id}`, {album: {done: e.target.checked}})
    .then(response => {
      this.props.dispatch(editAlbum(id))
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getAlbum(this.props.match.params.albumId);
	}

  render() {
    const album = this.props.album
    const genericCoverURL = "http://canaanmedia.com/wp-content/uploads/2014/09/12.jpg"
    album.cover_url = album.cover_url == "" ?  genericCoverURL : album.cover_url

    return (
      <ul>
        <AlbumInfo key={album.id} currentalbum={album} deleteAlbum={album => this.deleteAlbum(album)} />
      </ul>
    )
  }
}

const mapStateToProps = state => {
	return {
		album: state.albums
	}
}

export default connect(mapStateToProps)(ShowAlbumContainer);
