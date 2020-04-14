import React, { Component } from 'react';
import ProjectCard from './ProjectCard/projectCard';
import projectList from './projectList.json';
import Wrapper from './wrapper/wrapper'



class Projects extends Component {
  state = { 
    projectList
   };
  render() {
    return (
      <Wrapper>
      {this.state.projectList.map(project => (
        <ProjectCard
          key={project.id}
          projectName={project.projectName}
          img={project.img}
          summary={project.summary}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
    </Wrapper>
    );
  }
}

export default Projects;