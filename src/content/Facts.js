import React, { Component } from 'react';
import ChuckForm from './get-chuck/ChuckForm'
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
  
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://api.funtranslations.com/translate/' + endpoint + '.json?text=' + text);
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (this.status == 200) {
        var xyz = this.response;
        console.log(xyz);
      }
      console.log(xyz);
    }

    xhr.send();
  }
    
  render() {
    return (
      <div>
        <h1>Chuck Norris Facts!</h1>
        <ChuckForm />
      </div>
    )
  }
}