import React, { Component } from 'react'

class VaultContainer extends Component {
  render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="taskInput" type="text"
	    placeholder="Add a record to your vault" maxLength="50" />
	</div>
	<div className="listWrapper">
	   <ul className="recordList">
	   </ul>
	</div>
      </div>
    )
  }
}

export default VaultContainer
