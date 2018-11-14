import React, { Component } from 'react';
import './App.css';
import './responsive.css'
import Section from './components/section';
import Main from './components/main'
import Homepage from './components/homepage'
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
  toggleOpen = (e) => {
    let burger = document.getElementById('hamburger');
    burger.classList.toggle('open')
    let nav = document.getElementById('nav');
    nav.style.display === 'none'
    ? nav.style.display = 'block' : nav.style.display = 'none';
  }
  render() {
    return (
      <div className="App">
        <div className="homepage-container">
          <Route exact path="/" render={() => (
            <Homepage
              {...this.state}
              toggleOpen={this.toggleOpen}
              />
          )}
          />
          </div>
        </div>
    );
  }
}

export default App;
