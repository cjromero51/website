import React, { Component } from 'react';
import Nav from './nav';
import Typed from 'react-typed';
class Homepage extends Component {
  loadImage = () => {
    setTimeout(()=> {
      document.getElementById("picture").style.display = "";
    },12000)
  }
  wait = () => {
    setTimeout(() => {
      document.getElementById('wait').style.display = "";
      document.getElementById('wait').style.textAlign = "center";
    }, 9000)
    // setTimeout(() => {
    //   document.getElementById('wait').style.display = "none";
    // },12000)
  }
  render(){
    return (
      <main>
        <Nav
          {...this.props}
        />
        <div id="homepage">
        <div className="hamburger" onClick={this.props.openMenu}>&#9776;</div>
          <div className="main-content">
            <h1 className="greetings">
              <Typed
                strings={['Greetings.']}
                typeSpeed={40}
                showCursor={false}
              />
            </h1>
            <p className="greetings">
              <Typed
                strings={["I'm CJ Romero, Front-End Web Developer.", "Let's start off by putting a face with a name."]}
                startDelay={1500}
                typeSpeed={40}
                backSpeed={10}
                showCursor={false}
              />
            </p>
            <p id="wait" style={{display:'none'}} onLoad={this.wait()}>
              <Typed
                strings={["Wait for it...", "CJ Romero"]}
                startDelay={9000}
                typeSpeed={40}
                backSpeed={10}
              />
            </p>
            <img id="picture" src={'/images/me.jpg'} alt="CJ & Josiah"style={{display:'none'}} onLoad={this.loadImage()}/>
          </div>
        </div>
      </main>
    )
  }
}

export default Homepage
