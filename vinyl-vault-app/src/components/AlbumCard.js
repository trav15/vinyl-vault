import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col, Card, CardTitle } from 'react-materialize'
import AlbumCardReveal from './AlbumCardReveal'

class AlbumCard extends Component {
  state = {
    likes: 0
  }

  increaseLike(e) {
    this.setState({likes: this.state.likes+1})
    console.log(this.state)
  }

  render() {
    const album = this.props.currentalbum;
    const genericCoverURL = "http://canaanmedia.com/wp-content/uploads/2014/09/12.jpg"
    album.cover_url = album.cover_url === "" ?  genericCoverURL : album.cover_url



    return (
      <li className="album">
        <Col s={12} m={3}>
          <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
              title = {album.title}
              reveal={ <AlbumCardReveal album={album} deleteAlbum={album => this.props.deleteAlbum(album)} /> }>
              <p>{album.artist}</p>
              <button onClick={e => this.increaseLike(e)}>{this.state.likes} Likes</button>
          </Card>
        </Col>
      </li>
    )
  }
}

const mapStateToProps = state => {
	return {
		album: state.album
	}
}

export default connect(mapStateToProps)(AlbumCard);
