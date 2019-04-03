import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadAlbum, editAlbum } from '../actions/actionCreators'
import AlbumForm from '../components/AlbumForm'
import { Row, Input, Button, Icon } from 'react-materialize'

class editAlbumContainer extends Component {
  getAlbum() {
    axios.get(`/api/vault/${this.props.match.url}`)
    .then(response => {
      this.props.dispatch(loadAlbum(response.data));
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getAlbum()
  }

  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    console.log(this.props.albums)
    return (
      <div className="album-form">
        <h2>HELLO</h2>
        <form>
        <div className="panel panel-default">
        </div>
        <Row className="add-album-form">
          <Input
            s={6}
            name="title"
            label="Album Title"
            class="active"
            value={this.props.albums.title}
            onChange={e => this.change(e)}
          />
          <Input
            s={6}
            name="artist"
            label="Artist"
            value={this.props.albums.artist}
            onChange={e => this.change(e)}
          />
          <Input
            s={12}
            name="cover_url"
            label="Cover URL (Optional)"
            value={this.props.albums.cover_url}
            onChange={e => this.change(e)}
          />
          <Input
            s={12}
            name="notes"
            label="Notes (Optional)"
            value={this.props.albums.notes}
            onChange={e => this.change(e)}
          />
          <Button waves='light' onClick={e => this.onSubmit(e)}>Add Album<Icon left>library_add</Icon></Button>
        </Row>
        </form>
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
