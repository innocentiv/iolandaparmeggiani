import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link';
import ResponsiveImage from '../components/ResponsiveImage';

import styles from '../css/index.module.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const imageWidth = 300;

  return (
    <div className={styles.postsContainer}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={styles.thumbnailContainer} key={post.id}>
              <GatsbyLink className={styles.thumbnailLink} to={post.frontmatter.path}>
                <ResponsiveImage 
                  className={styles.thumbnailLink}
                  image={post.frontmatter.thumbnail.childImageSharp.responsiveSizes}
                  alt={post.frontmatter.title}
                />
                <h2>{post.frontmatter.title}</h2>
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
