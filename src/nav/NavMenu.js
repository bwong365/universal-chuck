import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hamburger from './Hamburger';
import NavMenuLinks from './NavMenuLinks';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }), () => {
      if (this.state.isOpen) {
        document.addEventListener('click', this.handleClickWhileOpen);
      }
    });
  }

  handleClickWhileOpen = event => {
    //  Determine whether click is inside menu or not
    const menu = ReactDOM.findDOMNode(this.refs.menu);
    if (menu) {  // prevents error out (if resized back and forth while open)
      if (menu.contains(event.target)) {
        setTimeout(this.closeMenu, 150);  // 300ms delay makes it a bit less jarring
      }
      else {
        this.closeMenu();
      }
    }
    
    document.removeEventListener('click', this.handleClickWhileOpen);
  }

  closeMenu = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div style={{width: 0}}>
        <Hamburger onClick={this.toggleMenu}/>
        <NavMenuLinks
          ref='menu' home={this.props.home} homeText={this.props.homeText}
          links={this.props.links} open={this.state.isOpen}/>
      </div>
    )
  }
}