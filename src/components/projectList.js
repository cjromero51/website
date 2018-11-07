import React, { Component } from 'react';

class ProjectList extends Component {
  render(){
    console.log(this.props.projectObjects)
    const projectsContainer = document.getElementById('projects');
    console.log(projectsContainer)
    return (
      <div>
        {this.props && (

          this.props.projectObjects.map(project => {
            let projects = document.createElement('div')
            projects.className = 'project_container'

            let image = document.createElement('img');
            image.className = 'project_image'
            image.src = `images/${project.image}`;

            image.name = project.name;

            let imageLink = document.createElement('a');
            imageLink.href = project.url


            let nameLink = document.createElement('a');
            nameLink.className = 'project_item';

            let name = document.createElement('h3')
            name.className = 'project_titles'
            name.innerHTML = project.name

            imageLink.append(image);
            nameLink.append(name);
            projects.append(imageLink);
            projects.append(nameLink);
            projectsContainer.append(projects);
            return projectsContainer;
        })
      )
    }
    </div>
  )
}
}

export default ProjectList
