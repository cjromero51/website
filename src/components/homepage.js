import React, { Component } from 'react';
import Nav from './nav';
import Sidebar from './sidebar'
class Homepage extends Component {
  loadImage = () => {
    setTimeout(()=> {
      document.getElementById("picture").style.display = "flex";
    },5000)
  }
  wait = () => {
    setTimeout(() => {
      document.getElementById('wait').style.display = "block";
      document.getElementById('wait').style.textAlign = "center";
    }, 2500)
    setTimeout(() => {
      document.getElementById('wait').style.display = "none";
    },5000)
  }
  render(){
    return (
      <div className="homepage">
        <Sidebar
        {...this.props}
          />
        <div id="nav" style={{display:'none'}}>
          <Nav />
      </div>
      <div id="nav" style={{display:'block'}}>
        <div className="homepage-container">
        <table className="frontpage-table">
          <tr>
            <div className="header_interior">
                <h1 className="greetings">Greetings.</h1>
              <p className="greetings">I'm CJ Romero, Front-End Web Developer. <p>Let's start off by putting a face with a name. <p style={{display:'none'}} onLoad={this.wait()} id="wait">Wait for it...</p></p></p>
              </div>
          </tr>
          <tr>
            <img id="picture" className="my-photo" src={'/images/me.jpg'} style={{display:'none'}} onLoad={() => this.loadImage()}/>
          </tr>
          </table>
        </div>
      </div>
      </div>
    )
  }
}

export default Homepage
