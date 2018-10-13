import React, { Component } from 'react';
import './FadingMessage.scss';

export default class FadingMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {opacity: 0}
  }

  // Start fading right away
  componentDidMount() {
    this.fadeMe();
  }

  // Fade upon updating as well
  componentDidUpdate(prevProps) {
    // No condition checking resultes in infinite loop
    if (prevProps.text !== this.props.text) {
      if (this.props.time > 0) {
        this.fadeMe();
      } else {
        // If the message if infinite, don't fade
        this.setState({opacity: 1});
      }
    }
  }
  
    // Arrow binds 'this' implicitly
  fadeMe = () => {
    // 50ms delay ensures rendering first
    setTimeout(() => this.setState({opacity: 1}), 50);
    
    // Add a 1.5 duration to the message time (for animation and space)
    setTimeout(() => this.setState({opacity: 0}), this.props.time + 1500)
  }

  render() {
    const style = {opacity: this.state.opacity}
    
    return (
      <p style={style} className='fadeMessage'>
        {this.props.text}
      </p>
    );
  }
}