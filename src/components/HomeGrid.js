import React from 'react';
import GatsbyLink from 'gatsby-link';
import Link from './Link';
import ResponsiveImage from './ResponsiveImage';

import styles from '../css/homegrid.module.css';

export default function HomeGrid({ posts }) {
  return (
    <div className={styles.postsContainer}>
      {posts
        .map(({ node: post }) => {
          return (
            <div className={styles.thumbnailContainer} key={post.id}>
              <GatsbyLink className={styles.thumbnailLink} to={post.frontmatter.path}>
                <ResponsiveImage 
                  className={styles.thumbnailImage}
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

