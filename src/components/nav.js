import React, {Component} from 'react';
import {Link} from 'react-browser-router'
class Nav extends Component {
  render(){
    return (
      <div id="menu" className="menu-canvas">
        <a href="javascript:void(0)" className="x" onClick={this.props.closeMenu}>&times;</a>
        <div className="nav-wrapper">
          <li><Link to='/' onClick={this.forceUpdate}>Home</Link></li>
          <li><Link to='/about' onClick={this.forceUpdate}>About</Link></li>
          <li><Link to='/projects' onClick={this.forceUpdate}>Projects</Link></li>
          <li><Link to='/contact' onClick={this.forceUpdate}>Contact</Link></li>
        </div>
      </div>
    )
  }
}

export default Nav
