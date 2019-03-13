import React, { Component } from 'react'
import {Row, Col, Button, Icon, Input, Card, CardTitle} from 'react-materialize'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAlbums, addAlbum, toggleAlbum, deleteAlbum } from '../actions/actionCreators'


class VaultContainer extends Component {
  getAlbums() {
    axios.get('/api/vault/albums')
    .then(response => {
      this.props.dispatch(loadAlbums(response.data));
    })
    .catch(error => console.log(error))
  }

  createAlbum = (e) => {
    e.preventDefault()
    const data =  new FormData(e.target)
    console.log(data)
    axios.post('/api/vault/albums', {body: data})
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
    	<div className="inputContainer" >
        <form onSubmit={this.createAlbum}>
        <Row>
          <Input s={6} label="Artist" className="artistInput" name="artist" onChange={this.onChange}/>
          <Input s={6} label="Album Title" className="titleInput" name="title" onChange={this.onChange}/>
          <Input s={12} label="Cover URL" className="coverurlInput" name="cover_url" onChange={this.onChange}/>
          <Button waves='light' >Add Album<Icon left>library_add</Icon></Button>
        </Row>
        </form>
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
