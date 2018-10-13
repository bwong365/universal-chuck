import React from 'react';
import './Button.scss'

const Button = props => {
  // If button is disabled, style it accordingly
  const style = {};
  if (props.disabled) {
    style.backgroundColor = 'var(--grey)';
    style.color = 'grey';
  }

  
  return (
    <div>
      <button
        id={props.name}
        name={props.name}
        disabled={props.disabled}
        value={props.name}
        onClick={props.onClick}
        style={style}
      >
        {props.title}
      </button>
    </div>
  )
}

export default Button;