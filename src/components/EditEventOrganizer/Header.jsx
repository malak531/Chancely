import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/554d2f8a9c43ad0c289b6be83ba8e4bce49b588eaac5fe8a95ab97076f3dc710?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="Company Logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <a href="#" className={styles.navLink}>Home</a>
        <a href="#" className={styles.navLink}>Create Event</a>
        <a href="#" className={styles.navLink}>Explore</a>
        <a href="#" className={styles.navLink}>About us</a>
        <a href="#" className={styles.navLink}>Sign out</a>
      </nav>
    </header>
  );
}

export default Header;