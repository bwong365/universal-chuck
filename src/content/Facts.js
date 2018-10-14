import React from 'react';
import FactsForm from './get-facts/FactsForm'

const Facts = ({ isExpanded, title }) => (
  <div>
    {
      isExpanded ? <h1>{title}</h1> 
                : <div className='barTitle'>{title}</div>
    }
    <FactsForm />
  </div>
)

export default Facts;
