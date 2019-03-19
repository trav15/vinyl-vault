import React from "react";
import { Row, Input, Button, Icon } from 'react-materialize'

export default class AlbumForm extends React.Component {
  state = {
    title: "",
    artist: "",
    cover_url: "",
    notes: "",
    titleValid: "",
    artistValid: "",
    cover_urlValid: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.artist !== "" && this.state.title !== "") {
      this.props.onSubmit(this.state);
      this.setState({title: "", artist: "", cover_url: "", notes: ""});
    } else if (this.state.artist === "" && this.state.title === "") {
      this.setState({titleValid: "invalid", artistValid: "invalid"});
      window.Materialize.toast('Title and Artist fields must be completed', 4000);
    } else if (this.state.artist === "") {
      this.setState({artistValid: "invalid"});
      window.Materialize.toast('Artist field must be completed', 4000);
    } else if (this.state.title === "") {
      this.setState({titleValid: "invalid"});
      window.Materialize.toast('Title field must be completed', 4000);
    }
  };

  render() {
    return (
      <form>
      <div className="panel panel-default">
      </div>
      <Row className="add-album-form">
        <Input
          s={6}
          name="title"
          className={"validate " + this.state.titleValid}
          placeholder="Album Title"
          value={this.state.title || this.props.title}
          onChange={e => this.change(e)}
        />
        <Input
          s={6}
          name="artist"
          className={"validate " + this.state.artistValid}
          placeholder="Artist"
          value={this.state.artist}
          onChange={e => this.change(e)}
        />
        <Input
          s={12}
          name="cover_url"
          placeholder="Cover URL (Optional)"
          value={this.state.cover_url}
          onChange={e => this.change(e)}
        />
        <Input
          s={12}
          name="notes"
          placeholder="Notes (Optional)"
          value={this.state.notes}
          onChange={e => this.change(e)}
        />
        <Button waves='light' onClick={e => this.onSubmit(e)}>Add Album<Icon left>library_add</Icon></Button>
      </Row>
      </form>
    );
  }
}
