import React from 'react';

import chuck from './chuck.svg'
import './spaz.scss';

const Chuck = () => {
  return (
    // Chuck spins and pulses at differing rates (both use transform)
    <div className="spin">
      <img className="pulse" src={chuck} style={{color: 'white'}} alt="Chuck Norris" />
    </div>
  )
}

export default Chuck;