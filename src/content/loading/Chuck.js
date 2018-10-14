import React from 'react';

import chuck from './chuck.svg'
import './Chuck.scss';

const Chuck = () => {
  return (
    // Chuck spins and pulses at differing rates (both use transform)
    <div className='spin'>
      <div className='circle pulse'></div>
      <img className='pulse' src={chuck} alt=''/>
    </div>
  )
}

export default Chuck;