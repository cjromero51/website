import React, {Component} from 'react';

class Sidebar extends Component {
  render(){
    return (
      <div className="sidebar">
        <div role="button" tabIndex="1" id="hamburger" onClick={(e) => this.props.toggleOpen(e)}>
          <div className="hb-1"></div>
          <div className="hb-2"></div>
          <div className="hb-3"></div>
        </div>
      </div>
    )
  }
}

export default Sidebar
