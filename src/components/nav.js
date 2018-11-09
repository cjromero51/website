import React, {Component} from 'react';
class Nav extends Component {
  render(){
    return (
      <header className="header">
        <nav className="nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Web</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>
        <hr className="header_line"/>
      </header>
    )
  }
}

export default Nav
