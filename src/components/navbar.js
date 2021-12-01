import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <header className={styles.navbar}>
    <h1>Math Magicians</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link to="/" className={styles.listLink}>Home</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/calculator" className={styles.listLink}>Calculator</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="quotes" className={styles.listLink}>Quote</Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
