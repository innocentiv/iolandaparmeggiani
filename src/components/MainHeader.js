import React from 'react';
import GatsbyLink from 'gatsby-link';

import styles from '../css/main.module.css';

const MainHeader = () => (
  <header className={styles.header}>
    <GatsbyLink to="/" className={styles.link}>
      <h1 className={styles.title}>Iolanda Parmeggiani</h1>
    </GatsbyLink>
    <ul>
        <GatsbyLink to="/illustration/">Illustration</GatsbyLink>
        <GatsbyLink to="/graphic/">Graphic</GatsbyLink>
        <GatsbyLink to="/video/">Video</GatsbyLink>
        <GatsbyLink to="/about/">About</GatsbyLink>
    </ul>
  </header>
);

export default MainHeader;


