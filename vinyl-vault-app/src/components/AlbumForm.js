import React from "react";

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
        <input
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="artist"
          placeholder="Artist"
          value={this.state.artist}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="cover_url"
          placeholder="Cover URL"
          value={this.state.cover_url}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
