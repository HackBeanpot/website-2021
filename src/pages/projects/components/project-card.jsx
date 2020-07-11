import React from 'react';

const ProjectCard = ({ name, link, creators, description, award }) => {
  return (
    <div>
      <h1>{name}</h1>
      {!!award && <h2>Won: {award}</h2>}
      <a href={link}>Link To Project</a>
      <h3>Created by: {creators}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
