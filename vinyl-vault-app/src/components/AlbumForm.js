import React from "react";
import { Row, Col, Input, Button, Icon } from 'react-materialize'

export default class AlbumForm extends React.Component {
  state = {
    title: "",
    artist: "",
    cover_url: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  };

  render() {
    return (
      <form>
      <Row>
        <Input
          s={6}
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={e => this.change(e)}
        />
        <Input
          s={6}
          name="artist"
          placeholder="Artist"
          value={this.state.artist}
          onChange={e => this.change(e)}
        />
        <Input
          s={12}
          name="cover_url"
          placeholder="Cover URL"
          value={this.state.cover_url}
          onChange={e => this.change(e)}
        />
        <Button waves='light' onClick={e => this.onSubmit(e)}>Add Album<Icon left>library_add</Icon></Button>
      </Row>
      </form>
    );
  }
}
