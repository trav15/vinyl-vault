import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { loadAlbum, editAlbum } from '../actions/actionCreators'
import EditAlbum from '../components/EditAlbum'

class EditAlbumContainer extends Component {

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
    album.cover_url = album.cover_url === "" ?  genericCoverURL : album.cover_url

    return (
      <ul>
        <EditAlbum key={album.id} currentalbum={album} deleteAlbum={album => this.deleteAlbum(album)} />
      </ul>
    )
  }
}

const mapStateToProps = state => {
	return {
		album: state.albums
	}
}

export default connect(mapStateToProps)(EditAlbumContainer);
