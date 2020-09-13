import React, { useState } from 'react';
import { graphql } from 'gatsby';

import ProjectCard from '../components/project-card';

const ProjectsDirectoryPage = ({ data }) => {
  const { projectsByYear } = data;
  const [selectedYear, setSelectedYear] = useState(
    projectsByYear.edges[0].node.year
  );

  const handleYearChange = e => {
    e.preventDefault();
    setSelectedYear(e.target.value);
  };

  return (
    <main style={{ margin: '3rem' }}>
      <h1>Projects Directory</h1>
      <select
        value={selectedYear}
        onChange={handleYearChange}
        style={{ margin: '1em 0' }}
      >
        {projectsByYear.edges.map((edge, i) => {
          return (
            <option key={i} value={edge.node.year}>
              {edge.node.year}
            </option>
          );
        })}
      </select>
      <section>
        {projectsByYear.edges
          .filter(edge => edge.node.year === selectedYear)
          .map(edge => {
            return edge.node.projects.map((project, i) => (
              <ProjectCard
                key={i}
                name={project.name}
                link={project.link}
                creator={project.creator}
                description={project.description}
                award={project.award}
              />
            ));
          })}
      </section>
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

export default ProjectsDirectoryPage;
