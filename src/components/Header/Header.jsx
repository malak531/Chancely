import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;