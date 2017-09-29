const path = require('path');

const createTagPages = (createPage, posts) => {
  const tagTemplate = path.resolve('src/templates/tags.js');
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
    component: tagTemplate,
    context: {
      posts: posts
    },
  });

  Object.keys(tags).forEach(tagName => {
    createPage({
      path: `/${tagName}`,
      component: tagTemplate,
      context: {
        posts: tags[tagName]
      },
    });
  });
};

const createPages = (createPage, posts) => {
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? false : posts[index - 1].node;
    const next = index === posts.length - 1 ? false : posts[index + 1].node;
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
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
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
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