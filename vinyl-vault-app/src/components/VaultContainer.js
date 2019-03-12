import React, { Component } from 'react'

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
    	<div className="inputContainer">
    	  <input className="taskInput" type="text"
    	    placeholder="Add a record to your vault" maxLength="50" />
    	</div>
    	<div className="listWrapper">
    	   <ul className="albumList">
    	   </ul>
    	</div>
    </div>
    )
    }
  }

export default VaultContainer
