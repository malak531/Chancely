import React from 'react';
import styles from './HeaderLoggedOut.module.css';
import { Link } from 'react-router-dom';

const HeaderLoggedOut = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9163b62f940413608d344ef328f147b6739f79d565eb62aa790ac271175fa94e?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/login" className={styles.navLink}>Browse Opportunities</Link>
        <Link to="/about" className={styles.navLink}>About us</Link>
        <Link to="/login" className={styles.signOutButton}>Login/Register</Link>
      </nav>
    </header>
  );
};

export default HeaderLoggedOut;