import React from 'react';

import ProjectCard from '../components/project-card';

class ProjectsDirectoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //display recent year by default
      selectedProjects: props.data.projectsByYear.edges[0].node.year
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ selectedProjects: e.target.value });
  };
  render() {
    return (
      <main style={{ margin: '3rem' }}>
        <h1>Projects Directory</h1>
        <select
          value={this.state.selectedProjects}
          onChange={this.handleChange}
          style={{ margin: '1em 0' }}
        >
          {this.props.data.projectsByYear.edges.map((edge, i) => {
            return (
              <option key={i} value={edge.node.year}>
                {edge.node.year}
              </option>
            );
          })}
        </select>
        {this.props.data.projectsByYear.edges.map(edge => {
          if (edge.node.year === this.state.selectedProjects) {
            return (
              <section>
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
              </section>
            );
          }
        })}
      </main>
    );
  }
}

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
