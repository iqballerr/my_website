import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  const projects = [
    {
      name: 'Discord Bot',
      url: '',
      github: 'https://github.com/iqballerr/discord-bot',
      languages: 'JavaScript, Node.js, Discord.js',
      description:
        'Created a simple discord bot using a powerful node.js module that allows you to interact with the Discord API very easily.'
    },
    {
      name: 'Portfolio Website',
      url: '',
      github: 'https://github.com/iqballerr/my_website',
      languages: 'JavaScript, React, Node.js, Netlify, Bootstrap',
      description:
        'Developed a personal website to display my digital portfolio that you are currently viewing right now. Developed with React, a Javascript library for building user interfaces, and was deployed via Netlify. Updates will be implemented.'
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
