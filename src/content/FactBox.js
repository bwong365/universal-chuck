import React, { Component } from 'react';
import TextBox from './TextBox';

export default class FactBox extends Component {

  componentDidMount() {
    this.props.loaded();
  }

  render() {
    return (
      <TextBox {...this.props}/>
    );
  }
}