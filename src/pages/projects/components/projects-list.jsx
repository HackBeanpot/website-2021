import React from 'react';

import ProjectCard from './project-card';

const ProjectsList = props => {
  //query filter should always return 1 projects list per year, so index is 0
  return (
    <main style={{ margin: '3rem' }}>
      <h1>{props.data.projectsList.edges[0].node.year}</h1>
      <section>
        {props.data.projectsList.edges[0].node.projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              name={project.name}
              link={project.link}
              creator={project.creator}
              description={project.description}
              award={project.award}
            />
          );
        })}
      </section>
    </main>
  );
};

//$projectListYear passed in dynamically in gatsby-node.js
export const query = graphql`
query ProjectQuery($projectsListYear: Date!) {
  projectsList: allProjectsJson(filter: { year: { eq: $projectsListYear } }) {
    edges {
      node {
        id
        year
        projects {
          name
          link
          creator
          description
          award
        }
      }
    }
  }
}
`;

export default ProjectsList;
