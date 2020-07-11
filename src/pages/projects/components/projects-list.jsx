import React from 'react';
import { graphql } from 'gatsby';

import ProjectCard from './project-card';

const ProjectsList = props => {
  return (
    <section>
      {props.data.projectsList.edges.map(({ node }) => 
      
      //console.log(node)
      node.projects.map(({project}) => 
      console.log(project)
      )

      )}
    </section>
  );
};

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
            creators
            description
          }
        }
      }
    }
  }
`;
export default ProjectsList;
