import React, {Component} from 'react';
class Nav extends Component {
  render(){
    return (
      <div id="menu" className="menu-canvas">
        <a href="javascript:void(0)" className="x" onClick={this.props.closeMenu}>&times;</a>
        <div className="nav-wrapper">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Web</a></li>
          <li><a href="#">Contact</a></li>
        </div>
      </div>
    )
  }
}

export default Nav
