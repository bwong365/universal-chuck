import React, { Component } from 'react';

import NavBarLinks from './NavBarLinks';
import NavMenu from './NavMenu';
import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: window.innerWidth >= 576 ? true : false,  // handles responsiveness
      homeActive: props.home,  // set homelink here
      homeIcon: <i className='fas fa-home'></i>  // set text or icon here
    }
  }

  // Listens for window resizing
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  // Updates state during resize
  handleResize = () => {
    this.setState({
      isExpanded: window.innerWidth >= 576 ? true : false,
    })
  }

  render() {
    const NavComponent = this.state.isExpanded ? NavBarLinks : NavMenu;
    return (
      <div id='navcontainer'>
        { /* prevents content from pushing nav */ }
        <div id='navblock'></div>
        
        {/* Fixed header */}
        <div id='navbar'>
          <NavComponent
            home={this.state.homeActive}
            homeText={this.state.homeIcon}
            links={this.props.links} />
        </div>        
      </div>
    );
  }
}