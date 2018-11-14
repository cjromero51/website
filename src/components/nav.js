import React, {Component} from 'react';
class Nav extends Component {
  render(){
    return (
      <nav className="nav">
        <li><a className="nav-link" href="#">Home</a></li>
        <li><a className="nav-link" href="#">About</a></li>
        <li><a className="nav-link" href="#">Web</a></li>
        <li><a className="nav-link" href="#">Contact</a></li>
      </nav>
    )
  }
}

export default Nav
