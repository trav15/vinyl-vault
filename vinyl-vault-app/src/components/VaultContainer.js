import React, { Component } from 'react'
import {Row, Col, Input, Card, CardTitle} from 'react-materialize'

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
         <Row>
          {this.state.albums.map((album) => {
            return(
              <li className="album" album={album} key={album.id}>
                <Col s={12} m={6}>
                  <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
                      title = {album.title}
                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                      <p>{album.artist}</p>
                  </Card>
                </Col>
              </li>
            )
          })}
        </Row>
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
