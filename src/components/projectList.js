import React, { Component } from 'react';
import Nav from './nav'
class ProjectList extends Component {
  render(){
    return (
      <div className="projects">
        <Nav
          {...this.props}
          closeMenu={this.props.closeMenu}
          openMenu={this.props.openMenu}
          />
        <div id="homepage">
          <div className="hamburger" onClick={this.props.openMenu}>&#9776;</div>
          <h2>Projects</h2>
            <div className="project-list">
                {this.props && (
                  this.props.projectObjects.map((project, id) => (
                    <div key={id} className='project_container'>
                        <img className='project_image'
                          src={project.image}
                          srcSet={`${project.image1x} 1x, ${project.image2x} 2x`}
                          alt={project.name}/>
                        <a href={project.url}>
                      <div className="overlay">
                        <h3 className='project_titles'>{project.name}</h3>
                      </div>
                    </a>
                    </div>
                  ))
                )
              }
            </div>
      </div>
    </div>
  )
}
}

export default ProjectList
