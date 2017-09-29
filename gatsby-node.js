const path = require('path');

const createTagPages = (createPage, posts) => {
  const gridTemplate = path.resolve('src/templates/grid.js');
  const tags = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!tags[tag]) {
          tags[tag] = [];
        }
        tags[tag].push({node});
      });
    }
  });

  createPage({
    path: `/`,
    component: gridTemplate,
    context: {
      posts: posts
    },
  });

  Object.keys(tags).forEach(tagName => {
    createPage({
      path: `/${tagName}`,
      component: gridTemplate,
      context: {
        posts: tags[tagName]
      },
    });
  });
};

const createPages = (createPage, posts) => {
  const postTemplate = path.resolve('src/templates/post.js');

  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? false : posts[index - 1].node;
    const next = index === posts.length - 1 ? false : posts[index + 1].node;
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        prev,
        next,
      },
    });
  });
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            tags
            title
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 400) {
                  src
                  srcSet
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    createTagPages(createPage, posts);
    createPages(createPage, posts);

    return posts;
  });
};