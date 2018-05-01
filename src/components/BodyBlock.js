import React, { Component } from 'react';
import './BodyBlock.css'

class BodyBlock extends Component {
  render() {
    return (
      <div class={`body-input ${this.props.selected}`} onClick={_ => this.props.handleClick(this.props.content)}>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default BodyBlock;
