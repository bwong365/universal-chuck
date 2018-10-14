// Dependencies
import React, { Component } from 'react'
import axios from 'axios';

// Components
import Button from '../../form-parts/Button'
import Dropdown from '../../form-parts/Dropdown'
import Chuck from '../loading/Chuck'

// Helper & style
import formatResponse from './formatResponse'
import './ChuckForm.scss'

// endpoints are found at api.funtranslations.com
const languages = [
  { value: 'yoda', title: 'Yoda' },
  { value: 'pirate', title: 'Pirate' },
  { value: 'gungan', title: 'Gungan' },
  { value: 'shakespeare', title: 'Shakespeare' },
  { value: 'cockney', title: 'Cockney' },
  { value: 'morse', title: 'Morse Code' },
  { value: 'leetspeak', title: 'Haxx0r n000bz' },
  { value: '', title: "Back to Chuck's native tongue!" },
];

export default class ChuckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',  // displays facts
      language: '',
      chuck: false,  // loading spinner
      warning: false  // displays rate limit when language selected
    }
  }

  // Gets facts on click
  handleClick = (e) => {
    e.preventDefault();
    this.getFacts(e);
  }

  getFacts = (e) => {
    this.setState({
      chuck: true,  // start spinning!
      text: ''
    })

    const lang = this.state.language
    const url = 'https://universal-chuck-controller.herokuapp.com/chuck/'
    
     // Give the animation a bit of time between consecutive calls :)
    setTimeout(() => this.sendRequest(url + lang), 1500);
  }

  sendRequest = (endpoint) => {
    axios.get(endpoint)
      .then(res => {
        this.setState({
          chuck: false,
          text: formatResponse(res)
        })
      })
      .catch(err => {
        if (this.state.text === '') {
          this.setState({
            text: 'Looks like Chuck might be coming for you...'
          });
          this.setState({
            chuck: false
          })
        }
        console.log(err.data);
      });
  }

  handleChange = (e) => {
    this.setState({
      language: e.target.value
    }, () => {
      if (this.state.language !== '') {
        this.setState({
          warning: true
        });
      }
    })
  }
  
  render() {
    // Let Chuck start spinning from a random starting point
    const rotation = Math.floor(Math.random() * 720) - 360;
    const rotateStyle = {
      transform: `rotate(${rotation}deg)`
    }

    return (
      <div>
        <form>
          <Button title='Learn me some facts!' name='getFacts' onClick={this.handleClick} />
          <Dropdown options={languages} onChange={this.handleChange}/>
          
          { // warning display when language selected
            this.state.warning && <div>
              <span className='warning'>
                Note: api has a rate limit of 5 calls/hr
              </span>
            </div>
          }
        </form>
        

        {/* Facts go here */}
        <p>{this.state.text}</p>

        {/* displays while loading facts */}
        <div className='flex' style={rotateStyle}>
          {this.state.chuck && <Chuck />}
        </div>
      </div>
    );
  }
}