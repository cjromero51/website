import React, { Component } from 'react';

class ProjectList extends Component {
  render(){
    return (
      <React.Fragment>
        {this.props && (
          this.props.projectObjects.map((project, id) => (
            <div key={id} className='project_container'>
              <a className='image_container' href={project.url}>
                <img className='project_image'
                  src={project.image}
                  srcSet={`${project.image1x} 1x, ${project.image2x} 2x`}
                  alt={project.name}/>
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
