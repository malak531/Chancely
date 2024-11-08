import React from 'react';
import styles from './OrganizationProfile.module.css';

const NavItem = ({ text, isActive }) => {
  return (
    <button className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}>
      {text}
    </button>
  );
};

export default NavItem;