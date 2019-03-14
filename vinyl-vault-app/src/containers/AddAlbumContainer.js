import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/actionCreators'
import AlbumForm from '../components/AlbumForm'

class addAlbumContainer extends Component {

  addAlbum = (fields) => {
    axios.post('/api/vault/albums', {album: fields})
    .then(response => {
      console.log(response.data)
      this.props.dispatch(addAlbum(response.data))
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
