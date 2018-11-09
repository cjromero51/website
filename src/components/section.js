import React, { Component } from 'react';
import Nav from './nav';
class Section extends Component {
  render(){
    return (
      <section className="header_full">
        <Nav />
          <div className="header_interior">
              <p className="greetings">Greetings.</p>
            <p className="greetings">
              My name is CJ Romero, an aspiring front-end web developer looking to invest a ton of time and effort into the field.  I currently reside in Santa Clarita, CA, just outside of Los Angeles
            </p>
            <p className="greetings">My strengths include javaScript, HTML, and CSS.  I have familiarity with React.js, which was used to create this website</p>
            <p className="greetings">I am determined in my pursuit of knowledge, expanding my skillset as often as I can.  Read more about me <a className="bio-link" href="#">this.onClick(() => <span className="bio">here</span>)</a></p>

          </div>
      </section>
    )
  }
}

export default Section
