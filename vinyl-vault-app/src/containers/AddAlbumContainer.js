import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/actionCreators'
import AlbumForm from '../components/AlbumForm'

class addAlbumContainer extends Component {

  addAlbum = (fields) => {
    axios.post('/api/vault/albums', {album: fields})
    .then(response => {
      this.props.dispatch(addAlbum(response.data))
    if (response.status === 200 && response.statusText === 'OK'){
        window.Materialize.toast('Successfully Added Album To Collection', 3000)
    }
    })
    .catch(error => console.log(error))
  }

  onSubmit = (fields) => {
    this.addAlbum(fields)
  }

  render() {

    return (
      <div className="album-form">
        <AlbumForm onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(addAlbumContainer)
