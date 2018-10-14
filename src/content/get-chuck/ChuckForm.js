import React, { Component } from 'react'
import axios from 'axios';
import Button from '../../form-parts/Button'
import Dropdown from '../../form-parts/Dropdown'
import Chuck from '../loading/Chuck'
import './ChuckForm.scss'

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
      text: '',
      language: '',
      chuck: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.getFacts(e);
  }

  getFacts = (e) => {
    this.setState({
      chuck: true,
      text: ''
    })

    const lang = this.state.language
    
    const url = 'https://universal-chuck-controller.herokuapp.com/chuck/'
    console.log(url + lang);
    
    axios.get(url + lang)
      .then(res => {
        this.setState({
          chuck: false,
          text: res.data
        })
      })
      .catch(err => {
        this.setState({
          chuck: false,
          text: 'something went wrong'
        })
        console.log(err.data);
      });
  }

  handleChange = (e) => {
    this.setState({
      language: e.target.value
    })
  }
  
  render() {
    
    return (
      <div>
        <form>
          <Button title='Learn me some facts!' name='getFacts' onClick={this.handleClick} />
          <Dropdown options={languages} onChange={this.handleChange}/>
        </form>
        <p style={{marginTop: 50, fontSize: '1.1rem'}}>{this.state.text}</p>
        <div className='flex'>
          {this.state.chuck && <Chuck />}
        </div>
      </div>
    );
  }
}