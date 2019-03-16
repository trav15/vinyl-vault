import React, { Component } from 'react'
import { Row } from 'react-materialize'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAlbums, editAlbum, deleteAlbum } from '../actions/actionCreators'
import ShowAlbum from '../components/ShowAlbum'
import AddAlbumContainer from './AddAlbumContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class VaultContainer extends Component {
  getAlbums() {
    axios.get('/api/vault/albums')
    .then(response => {
      this.props.dispatch(loadAlbums(response.data));
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



  render() {
    const albums = this.props.albums;
    const sortedAlbums = albums.sort((a,b) => b.artist < a.artist ? 1 : -1)

    return (
    <div>
      <div className="listWrapper">
         <ul className="albumList">
         <Row>
          {sortedAlbums.map((album) => <ShowAlbum key={album.id} currentalbum={album} deleteAlbum={album => this.deleteAlbum(album)} />)}
        </Row>
        </ul>
      </div>
      <div>
        <Row>
          <AddAlbumContainer />
        </Row>
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
