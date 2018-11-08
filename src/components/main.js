import React, { Component } from 'react';
import ProjectList from "./projectList";
class Main extends Component {
  render(){
    return (
      <div>
        <main className="content">
          <img className="front_end_image" src="images/frontendweb.png" alt="Frontend Web Dev"/>
          <h2 className="my_projects">
            MY PROJECTS
          </h2>
          <div id="projects">
            <ProjectList
              {...this.props}
              />
          </div>
          <p className="self-summary"></p>
        </main>
        <footer>
          <hr className="header_line"/>
        </footer>
      </div>
    )
  }
}

export default Main
