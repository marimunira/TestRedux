import React, {  Component } from 'react'
import "./item.css";
export default class Item extends Component {
  render() {
    return (
    <div>
      <span>{this.props.name}</span>
      <button className="button--left" onClick={this.props.clicker}>Remove</button>
      <hr></hr>
    </div>)

  }
}
