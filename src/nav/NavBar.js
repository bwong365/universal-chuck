import React from 'react';

import NavBarLinks from './NavBarLinks';
import NavMenu from './NavMenu';
import './NavBar.scss';

const NavBar = ({ isExpanded, homeText, links }) => {
  const NavComponent = isExpanded ? NavBarLinks : NavMenu;
  
  return (
    <div id='navcontainer'>
      { /* prevents content from pushing nav */ }
      <div id='navblock'></div>
      
      {/* Fixed header */}
      <div id='navbar'>
        <NavComponent
          homeText={homeText}
          links={links}/>
      </div>
      <div id='navfill'></div>  
    </div>
  );
}

export default NavBar;

