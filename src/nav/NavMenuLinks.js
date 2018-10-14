import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenuLinks.scss';

// NavMenuLinks must be a Component for NavMenu to set a ref
export default class NavMenuLinks extends Component {
  render() {
    const { open, links, home, homeText } = this.props;
    
    // toggles menu open or closed
    const left = open ? 0 : -155;
      
    // converts array into array of links from App.js
    const linkList = links.map(({ label, path }) =>
      <li key={label.toLowerCase()}>
        <Link to={path}>{label}</Link>
      </li>
    );

    return (
      <ul id='navmenulinks' style={{'left': left}}>
        {/* Home depends on prop for existence */}
        {home && <li><Link to='/'>{homeText}</Link></li>}
        {linkList}
      </ul>
    );
  }
}
