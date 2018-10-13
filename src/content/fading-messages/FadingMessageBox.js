import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FadingMessage from './FadingMessage'

// Delay a bit for page load, and keep track of total time
let timeIndex = 1500;

export default class FadingMessageBox extends Component {
  // Iterate through the array of messages and render each one
  componentDidMount() {
    this.props.messages.forEach(message =>(
        this.fadeMessage(message.text, message.duration)
      )
    );
  }

  // Arrow binds 'this' implicitly
  fadeMessage = (text, time) => {
    // Render message on timer
    setTimeout(() => this.renderMessage(text, time), timeIndex);
    // Timers are asynchronous, so increment a component-wide time index
    timeIndex += time + 3500;
  }

  
  renderMessage(text, time) {
    const fadingBox = document.getElementById('fadingbox');
    fadingBox && ReactDOM.render(
      <FadingMessage text={text} time={time} />,
      fadingBox
    );
  }

  render() {
    return <div id='fadingbox'></div>;
  }
}