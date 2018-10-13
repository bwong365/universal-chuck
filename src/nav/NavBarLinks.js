import React from 'react';
import { Link } from 'react-router-dom';

import './NavBarLinks.scss';

const NavLinks = ({ links, home, homeText }) => {
  
  //  Converts link names to an array of links from App.js
  const linkList = links.map(({ label, path }) => (
    <li key={label.toLowerCase()}>
      <Link to={path}>{label}</Link>
    </li>));
  
  return (
    <ul id='navlinks'>
      {/* Home exists based on parent props */}
      {home && <li><Link to='/'>{homeText}</Link></li>}
      {linkList}
    </ul>
  )
};

export default NavLinks;