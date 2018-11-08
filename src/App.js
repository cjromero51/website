import React, { Component } from 'react';
import './App.css';
import Section from './components/section';
import Main from './components/main'

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

  render() {
    return (
      <div className="App">
        <Section
          {...this.state}
          />
        <Main
          {...this.state}
          />
      </div>
    );
  }
}

export default App;
