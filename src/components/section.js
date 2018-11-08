import React, { Component } from 'react';

class Section extends Component {
  render(){
    return (
      <section className="header_full">
        <header className="header">
          <nav>
            <a className="nav-link" href="#">About Me</a>
            <a className="nav-link" href="#">Web</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
          <hr className="header_line"/>
          <div className="header_interior">
            <p>Greetings.</p>
            <p>
              My name is CJ Romero, an aspiring front-end web developer looking to invest a ton of time and effort into the field.  I currently reside in Santa Clarita, CA, just outside of Los Angeles
            </p>
            <p>My strengths include javaScript, HTML, and CSS.  I have familiarity with React.js, which was used to create this website</p>
            <p>I am determined in my pursuit of knowledge, expanding my skillset as often as I can.  Read more about me <a href="#">here</a></p>

          </div>
        </header>
      </section>
    )
  }
}

export default Section
