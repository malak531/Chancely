import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>© Chancely – All rights reserved</p>
        <nav className={styles.footerNav}>
          <a href="/terms" className={styles.footerLink}>Terms and Conditions</a>
          <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
          <a href="/disclaimer" className={styles.footerLink}>Disclaimer</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;