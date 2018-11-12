import React, { Component } from 'react';

class Sidebar extends Component {
  toggleOpen = (e) => {
    let burger = document.getElementById('hamburger');
    burger.classList.toggle('open')
  }
  render(){
    return (
      <div className="sidebar">
        <div id="hamburger" className="hamburger-position" onClick={(e) => this.toggleOpen(e)}>
          <div className="hb-1"></div>
          <div className="hb-2"></div>
          <div className="hb-3"></div>
        </div>
        <div className="sidebar-bottom"></div>
      </div>
    )
  }
}

export default Sidebar
