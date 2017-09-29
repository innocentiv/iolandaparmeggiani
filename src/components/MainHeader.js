import React from 'react';
import GatsbyLink from 'gatsby-link';

import styles from '../css/main.module.css';

const MainHeader = () => (
  <header className={styles.header}>
    <GatsbyLink to="/" className={styles.link}>
      <h1 className={styles.title}>Iolanda Parmeggiani</h1>
    </GatsbyLink>
    <ul>
        <li><GatsbyLink to="/illustration/">Illustration</GatsbyLink></li>
        <li><GatsbyLink to="/graphic/">Graphic</GatsbyLink></li>
        <li><GatsbyLink to="/video/">Video</GatsbyLink></li>
        <li><GatsbyLink to="/about/">About</GatsbyLink></li>
    </ul>
  </header>
);

export default MainHeader;


