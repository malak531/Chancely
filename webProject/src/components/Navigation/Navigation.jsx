import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles.navItem + ' ' + styles.active}>Home</a>
      <a href="/opportunities" className={styles.navItem}>Browse Opportunities</a>
      <a href="/about" className={styles.navItem}>About us</a>
      <button className={styles.loginButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4142c6685d20d1a6114fb7168745a90751f4b4e7f7946b7d2dd82bd8c06c6c8?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="" className={styles.loginIcon} />
        Login/Register
      </button>
    </nav>
  );
};

export default Navigation;