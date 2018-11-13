import React, { Component } from 'react';
import Nav from './nav';

class Sidebar extends Component {
  toggleOpen = (e) => {
    let burger = document.getElementById('hamburger');
    burger.classList.toggle('open')
    // let nav = document.getElementById('nav');
    // if (nav.style.display === 'none') {
    //   nav.style.display = 'block';
    // } else {
    //   nav.style.display = 'none';
    // }
  }
  render(){
    return (
      <div className="sidebar">
        <div id="hamburger" className="hamburger-position" onClick={(e) => this.toggleOpen(e)}>
          <div className="hb-1"></div>
          <div className="hb-2"></div>
          <div className="hb-3"></div>
        </div>
        <div id="nav" style={{display:'none'}} className="sidebar-open">
          <Nav />
        </div>
      </div>
    )
  }
}

export default Sidebar
