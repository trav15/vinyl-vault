import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/actionCreators'
import AlbumForm from '../components/AlbumForm'
import ShowAlbum from '../components/ShowAlbum'

class addAlbumContainer extends Component {
  state = {
    message: ""
  }

  addAlbum = (fields) => {
    axios.post('/api/vault/albums', {album: fields})
    .then(response => {
      this.props.dispatch(addAlbum(response.data))
    if (response.status === 200 && response.statusText === 'OK'){
        this.setState({message: 'Successfully Added Album To Collection'})
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
        <div className="result">{ this.state.message }</div>
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
