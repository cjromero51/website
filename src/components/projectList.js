import React, { Component } from 'react';

class ProjectList extends Component {
  render(){
    return (
      <React.Fragment>
        {this.props && (
          this.props.projectObjects.map((project, id) => (
            <div key={id} className='project_container'>
              <a href={project.url}>
                <img className='project_image' src={project.image} alt={project.name}/>
                </a>
                <a className='project_item' href={project.url}>
                  <h3 className='project_titles'>{project.name}</h3>
                </a>
            </div>
          ))
        )
      }
      </React.Fragment>
  )
}
}

export default ProjectList
