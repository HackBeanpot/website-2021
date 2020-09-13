import React from 'react';
import { graphql } from 'gatsby';

import ProjectCard from './components/project-card';
import DynamicLink from '../../components/dynamic-link';

const ProjectsPage = ({ data }) => {
  const { projectsByYear } = data;
  const recentYearsToDisplay = 2;

  return (
    <main style={{ margin: '3rem' }}>
      <h1>Projects</h1>
      <h4>
        <DynamicLink to="/projects/directory">
          Link to Projects Directory
        </DynamicLink>
      </h4>
      <h4>Featured</h4>
      {projectsByYear.edges
        .filter((edge, i) => i <= recentYearsToDisplay)
        .map((edge, i) => {
          return (
            <section key={i}>
              <h5>{edge.node.year}</h5>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {edge.node.projects.map((project, i) => {
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
              </div>
            </section>
          );
        })}
    </main>
  );
};

export const query = graphql`
  query {
    projectsByYear: allProjectsJson(sort: { fields: [year], order: DESC }) {
      edges {
        node {
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

export default ProjectsPage;
