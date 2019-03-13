import React, { Component } from 'react'
import {Row, Col, Button, Icon, Input, Card, CardTitle} from 'react-materialize'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAlbums, addAlbum, toggleAlbum, deleteAlbum } from '../actions/actionCreators'
import AlbumForm from './AlbumForm'


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
      this.props.dispatch(addAlbum(response.data.id, response.data.title))
    })
    .catch(error => console.log(error))
  }

  updateAlbum = (e, id) => {
    axios.put(`/api/v1/albums/${id}`, {album: {done: e.target.checked}})
    .then(response => {
      this.props.dispatch(toggleAlbum(id))
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
    return (
    <div>
      <div className="listWrapper">
         <ul className="albumList">
         <Row>
          {this.props.albums.map((album) => {
            return(
              <li className="album" album={album} key={album.id}>
                <Col s={12} m={6}>
                  <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
                      title = {album.title}
                      reveal={ <span className="deleteAlbumBtn" onClick={(e) => this.deleteAlbum(album.id)}>
                    x
                  </span>}>
                      <p>{album.artist}</p>
                  </Card>
                </Col>
              </li>
            )
          })}
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
