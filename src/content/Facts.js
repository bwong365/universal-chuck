import React, { Component } from 'react';
import FactBox from './FactBox';
import TextBox from './TextBox';
import axios from 'axios';

export default class Facts extends Component {
  constructor() {
    super();
    this.state = {
      fact: '',
      translation: ''
    }
    this.getNewFact = this.getNewFact.bind(this);
    this.translate = this.translate.bind(this);
  }

  getNewFact() {
    console.log('calling facts');
    axios({
      method: 'get',
      url: 'https://api.chucknorris.io/jokes/random',
      responseType: 'json',
    })
    .then(response => {
      this.setState({
        fact: response.data.value
      }, () => this.translate())
    })
    .catch(error => {
      console.log(error);
    });
  }

  translate() {
    console.log('hi ' + this.state.fact);
    const languages = [
      'yoda', 'pirate', 'gungan', 'shakespeare',
      'cockney', 'morse', 'leetspeak'
    ];
    const randomLang = Math.floor(Math.random() * 7);
    const endpoint = languages[randomLang];
    const text = encodeURI(this.state.fact);
  
    
    axios({
      method: 'get',
      Origin: 'http://www.funtranslations.com',
      url: 'https://api.funtranslations.com/translate/' + endpoint + '.json?text=' + text
    }).then(response => {
      this.setState({
        translation: response.contents.translation
      });
    }).catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        <h1>Chuck Norris Facts!</h1>
        <FactBox text={this.state.fact} loaded={this.getNewFact}/>
        <TextBox text={this.state.translation} />
      </div>
    )
  }
  
}