import React, { Component } from 'react';

export  class Dialog extends Component {
  render() {
    if (this.props.isopen) {
      return (<div>
        <p>Delete post {this.props.name}?</p>
        <button onClick={() => this.props.onSubmitClick(this.props.id)}>Yes</button>
        <button onClick={() => this.props.onCancelClick()}>Nope</button>
      </div>)
    }

    else
      return (<p>NO MODAL</p>)
  }
}