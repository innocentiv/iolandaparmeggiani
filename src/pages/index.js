import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Link from '../components/Link';

import styles from '../css/index.module.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className={styles.postsContainer}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={styles.thumbnailContainer} key={post.id}>
              <GatsbyLink to={post.frontmatter.path}>
                <img className={styles.thumbnail} alt={post.frontmatter.title} src={post.frontmatter.thumbnail.childImageSharp.responsiveSizes.src} />
              </GatsbyLink>
            </div>
          );
        })}
    </div>
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
              }
            }
          }
        }
      }
    }
  }
}
`;
