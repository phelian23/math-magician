import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <section className={styles.footer}>
    <p>Math Magicians</p>
    <p>
      &copy; Copyright 2021
      <br />
      {' '}
      Created by Femi Awoyemi
    </p>
  </section>
);

export default Footer;
