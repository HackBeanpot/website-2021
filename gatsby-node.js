const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const ProjectsList = path.resolve('src/pages/projects/components/projects-list.jsx');

  return graphql(`
  {
      allProjectsJson {
          edges {
              node {
                  year
                }
            }
        }
    }
  `).then(result => {
      
    if (result.errors) {
      throw result.errors;
    }

    result.data.allProjectsJson.edges.forEach(projectsByYear => {
      createPage({
        path: `/projects/${projectsByYear.node.year}`,
        component: ProjectsList,
        context: { projectsListYear: projectsByYear.node.year }
      });
    });
  });
};
