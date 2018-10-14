import React, { Component } from 'react';
import ChuckForm from './get-chuck/ChuckForm'

export default class Facts extends Component {
  render() {
    return (
      <div>
        <h1>Chuck Norris Facts!</h1>
        <ChuckForm />
      </div>
    )
  }
}
