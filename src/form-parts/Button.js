import React from 'react';
import './Button.scss'

const Button = ({ title, name, onClick, disabled }) => {
  // If button is disabled, style it accordingly
  const style = {};
  if (disabled) {
    style.backgroundColor = 'var(--grey)';
    style.color = 'grey';
  }
  
  return (
    <div>
      <button
        id={name}
        name={name}
        disabled={disabled}
        value={name}
        onClick={onClick}
        style={style}
      >
        {title}
      </button>
    </div>
  )
}

export default Button;