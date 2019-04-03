import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { editAlbum } from '../actions/actionCreators'
import AlbumForm from '../components/AlbumForm'

class editAlbumContainer extends Component {

  render() {

    return (
      <div className="album-form">
        <h2>HELLO</h2>
        <AlbumForm />
      </div>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps)(editAlbumContainer)
