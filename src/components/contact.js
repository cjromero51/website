import React, { Component } from 'react';
import Nav from './nav';

class Contact extends Component {
  render() {
    return (
      <main>
        <Nav
          {...this.props}
          closeMenu={this.props.closeMenu}
          openMenu={this.props.openMenu}
        />
        <div id="homepage">
        <div className="hamburger" onClick={this.props.openMenu}>&#9776;</div>
          <div className="main-content">
        <p>hello <strong>contact</strong> world</p>
        </div>
        </div>
      </main>
    )
  }
}
export default Contact
