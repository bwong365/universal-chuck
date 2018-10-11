import React, { Component } from 'react';

export default class TextBox extends Component {
  
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}