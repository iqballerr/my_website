import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  const projects = [
    {
      name: 'Monitoring and Managing the Impact of Air Quality',
      url: '',
      github: '',
      languages: 'Python',
      description:
        'Developed a program giving a reading of areas with unhealthy air quality. Used two web APIs, PurpleAir for collection of air quality sensors around the United States and NominatimAPI for a geocoding service.'
    },
    {
      name: 'Connect Four Game',
      url: '',
      github: '',
      languages: 'Python',
      description:
        'Implemented a Python-shell based game that you can play on your own computer or play online by connecting to a central, shared server. Used thrid-party game library PyGame 2.0 for GUI.'
    },
  ]
	return (
    <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
      <h2 style={{color: 'white'}}>What I've worked on...</h2>
      <div className="container">
        <div className="row justify-content-center">  
          {projects.map((project, index)=>(
            <ProjectCard
              key={index}
              url={project.url}
              name={project.name}
              github={project.github}
              languages={project.languages} description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
