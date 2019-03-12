import React, { Component } from 'react'
import {Row, Input} from 'react-materialize'

class VaultContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  getAlbums() {
    fetch('/api/vault/albums')
      .then(resp => resp.json())
      .then(albums => {
        this.setState({ albums: albums });
      })
  }

  componentDidMount() {
    this.getAlbums()
  }

  render() {
    return (
    <div>
      <div className="listWrapper">
         <ul className="albumList">
          {this.state.albums.map((album) => {
            return(
              <li className="album" album={album} key={album.id}>
                <label className="taskLabel">{album.title}</label>
              </li>
            )
          })}
         </ul>
      </div>
    	<div className="inputContainer">
        <Row>
          <Input s={6} label="Artist" className="artistInput"/>
          <Input s={6} label="Album Title" className="titleInput"/>
          <Input s={12} label="Cover URL" className="coverurlInput"/>
        </Row>
    	</div>
    </div>
    )
    }
  }

export default VaultContainer
