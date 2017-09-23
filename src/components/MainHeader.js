import React from 'react';
import GatsbyLink from 'gatsby-link';

import styles from '../css/main.module.css';

const MainHeader = () => (
  <header className={styles.header}>
    <GatsbyLink to="/" className={styles.link}>
      <h1 className={styles.title}>Iolanda Parmeggiani</h1>
    </GatsbyLink>
  </header>
);

export default MainHeader;
