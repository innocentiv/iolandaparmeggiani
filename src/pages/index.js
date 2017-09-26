import React from 'react';
import Helmet from 'react-helmet';
import HomeGrid from '../components/HomeGrid'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <HomeGrid posts={posts} />
  );
}

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        frontmatter {
          title
          path
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
}
`;
