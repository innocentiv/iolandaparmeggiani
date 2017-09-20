import React from 'react';
import styles from '../css/main.module.css';

const MainContainer = ({ children }) => (
  <section className={styles.container}>
    { children }
  </section>
);

export default MainContainer;
