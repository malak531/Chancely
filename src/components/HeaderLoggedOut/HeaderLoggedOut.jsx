import React from 'react';
import styles from './HeaderLoggedOut.module.css';

const HeaderLoggedOut = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9163b62f940413608d344ef328f147b6739f79d565eb62aa790ac271175fa94e?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/opportunities" className={styles.navLink}>Browse Opportunities</a>
        <a href="/about" className={styles.navLink}>About us</a>
        <button className={styles.signOutButton}>Login/Register</button>
      </nav>
    </header>
  );
};

export default HeaderLoggedOut;