import React, { Component } from 'react'
import {Row, Col, Card, CardTitle} from 'react-materialize'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAlbums, addAlbum, editAlbum, deleteAlbum } from '../actions/actionCreators'
import AlbumForm from './AlbumForm'
import ShowAlbum from './ShowAlbum'

class VaultContainer extends Component {
  getAlbums() {
    axios.get('/api/vault/albums')
    .then(response => {
      this.props.dispatch(loadAlbums(response.data));
    })
    .catch(error => console.log(error))
  }

  createAlbum = (fields) => {
    axios.post('/api/vault/albums', {album: fields})
    .then(response => {
      console.log(response.data)
      this.props.dispatch(addAlbum(response.data))
    })
    .catch(error => console.log(error))
  }

  editAlbum = (e, id) => {
    axios.put(`/api/v1/albums/${id}`, {album: {done: e.target.checked}})
    .then(response => {
      this.props.dispatch(editAlbum(id))
    })
    .catch(error => console.log(error))
  }

  deleteAlbum = (id) => {
    axios.delete(`/api/vault/albums/${id}`)
    .then(response => {
      this.props.dispatch(deleteAlbum(id))
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getAlbums()
  }

  onSubmit = (fields) => {
    this.createAlbum(fields)
  }

  render() {
    const albums = this.props.albums;
    const sortedAlbums = albums.sort((a,b) => b.artist < a.artist ? 1 : -1)

    return (
    <div>
      <div className="listWrapper">
         <ul className="albumList">
         <Row>
          {sortedAlbums.map((album) => <ShowAlbum key={album.id} currentalbum={album} />)}
        </Row>
        </ul>
      </div>
      <div>
        <AlbumForm onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    </div>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(VaultContainer)
