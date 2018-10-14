import React from 'react';
import './spaz.css';
import chuck from './chuck.svg'
const Chuck = () => {
  return (
    <div className="spin">
      <img className="pulse" src={chuck} style={{color: 'white'}} alt="Chuck Norris" />
    </div>
  )
}

export default Chuck;