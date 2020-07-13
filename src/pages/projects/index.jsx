import React from 'react';
import { Link } from 'gatsby';

import ProjectCard from './components/project-card';

const ProjectsHomePage = props => {
  return (
    <main style={{ margin: '3rem' }}>
      <h1>Projects</h1>
      <h4>
        <Link to="/projects/directory">Link to Projects Directory</Link>
      </h4>
      <h4>List of to Projects By Year</h4>
      <ul>
        {props.data.projectsByYear.edges.map(edge => {
          let year = edge.node.year;
          return (
            <li key={year}>
              <Link to={`/projects/${year}`}>{year}</Link>
            </li>
          );
        })}
      </ul>
      <h4>Featured</h4>
      {//query sorts years from most to least recent
      props.data.projectsByYear.edges.map((edge, i) => {
        //display projects from last 3 years
        if (i <= 2) {
          return (
            <section key={i}>
              <h5>{edge.node.year}</h5>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {edge.node.projects.map((project, i) => {
                  return (
                    <div style={{ width: '300px', paddingRight: '1rem' }}>
                      <ProjectCard
                        key={i}
                        name={project.name}
                        link={project.link}
                        creator={project.creator}
                        description={project.description}
                        award={project.award}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          );
        }
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

export default ProjectsHomePage;
