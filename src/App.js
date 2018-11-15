import React, { Component } from 'react';
import './App.css';
import './responsive.css'
import ProjectList from './components/projectList'
import Homepage from './components/homepage'
import About from './components/about'
import Contact from './components/contact'
import {
    BrowserRouter,
    Route,
    Link
} from "react-browser-router";

class App extends Component {
  state = {
    projectObjects: [
      {
        name: "Memory Game",
        url: "https://cjromero51.github.io",
        image:"./images/memory_no_srcset.jpg",
        image1x:"./images/memory-1x.jpg",
        image2x:"./images/memory-2x.jpg"
      },
      {
        name: "Restaurant Review App",
        url: "#",
        image:"./images/restaurant_review_no_srcset.jpg",
        image1x:"./images/restaurant_review-1x.jpg",
        image2x:"./images/restaurant_review-2x.jpg"
      },
      {
        name: "Neighborhood Map",
        url: "#",
        image:"./images/map_no_srcset.jpg",
        image1x:"./images/map-1x.jpg",
        image2x:"./images/map-2x.jpg"
      }
    ]
  }
  closeMenu = () => {
    document.getElementById('menu').style.width = "0";
    document.getElementById('homepage').style.marginLeft = "0"
  }
  openMenu = () => {
    document.getElementById('menu').style.width = "100vw";
    document.getElementById('homepage').style.marginLeft = "100vw"
  }
  render() {
    return (
      <div className="App">
          <Route exact path="/" render={() => (
            <Homepage
              {...this.state}
              closeMenu={this.closeMenu}
              openMenu={this.openMenu}
              />
          )}
          />
        <Route path="/about" render={() => (
            <About
              closeMenu={this.closeMenu}
              openMenu={this.openMenu}
              />
          )}
          />
        <Route path="/projects" render={() => (
            <ProjectList
              {...this.state}
              closeMenu={this.closeMenu}
              openMenu={this.openMenu}
              />
          )}
          />
        <Route path="/contact" render={() => (
              <Contact
                {...this.state}
                closeMenu={this.closeMenu}
                openMenu={this.openMenu}
                />
            )}
            />
        </div>
    );
  }
}

export default App;
