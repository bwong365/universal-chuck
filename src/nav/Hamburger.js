import React from 'react';

import './Hamburger.scss';

const Hamburger = (props) => {

  /* handleMouseEnter annd handleMouseLeave simply make the #bun darken when mouseover #hover
  the order of #hover then #bun in render must be retained */
  function handleMouseEnter(e) {
    // Next sibling should be the bun
    e.target.nextSibling.style.backgroundColor = 'rgba(0,0,0,.4)';
  }

  // See above
  function handleMouseLeave(e) {
    // Next sibling will be the bun, the grandparent will be the nav bar
    e.target.nextSibling.style.backgroundColor = e.target.parentNode.parentNode.style.backgroundColor;
  }

  return (
    <div id='hamburger'>
      <div id='hover' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.onClick}></div>
      <div id='bun'></div>
      <div id='bar1'></div>
      <div id='bar2'></div>
      <div id='bar3'></div>
    </div>
  )
}

export default Hamburger;