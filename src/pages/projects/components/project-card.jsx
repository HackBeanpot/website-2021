import React from 'react';

const ProjectCard = ({ name, link, creator, description, award }) => {
  return (
    <div style={{marginBottom: "1em", padding: "1rem", minHeight: "300px", border: "1px solid black"}}>
      <a href={link}><h2>{name}</h2></a>
      {!!award && <h4>Won: {award}</h4>}
      <h3>Created by: {creator}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
