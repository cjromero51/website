import React, { Component } from 'react';

class Section extends Component {
  render(){
    return (
      <section className="header_full">
        <header className="header">
          <div className="header_interior">
            <img src="./images/udacity.svg" alt="logo" className="udacity_logo"/>
            <h1 className="header_title">
              CJ ROMERO
            </h1>
            <h2 className="title_description">
              FRONT-END WEB DEVELOPER
            </h2>
            <hr className="header_line"/>
          </div>
        </header>
      </section>
    )
  }
}

export default Section
