import React from 'react'
import './Dropdown.scss'

const Dropdown = ({ options, onChange, style={} }) => {

  return (
    <select onChange={onChange}>
      <option selected={true} disabled={true}>Optional: Choose a language!</option>
      {
        options.map(({ value, title }) => (
          <option key={value} value={value}>{title}</option>
        ))
      }
    </select>
  );
}

export default Dropdown;