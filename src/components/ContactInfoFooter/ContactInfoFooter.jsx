import React from 'react';
import styles from './ContactInfoFooter.module.css';

const ContactInfoFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0217b733d431d736ebc051338f1003195d7b2544aacb64b7ad1ceb726f99273b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Company logo" className={styles.footerLogo} />
        <address className={styles.address}>
          KFUPM, Dhahran<br />
          Saudi Arabia
        </address>
        <p className={styles.phone}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cd1870657142b9677655b9184759b245de587a5fd8983fc7b708da4894ab35?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.contactIcon} />
          +966585673359
        </p>
        <p className={styles.email}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/27d78d49f3e9fd8f7e5573bdce2f2945401e6bdee2ba7c7c2c99b29e04156fce?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.contactIcon} />
          support@chancely.com
        </p>
      </div>
      <div className={styles.messageForm}>
        <h2 className={styles.messageTitle}>Have anything to say?<br />Leave us a message</h2>
        <form className={styles.form}>
          <input type="text" id="messageInput" className={styles.messageInput} placeholder="Write Your Thoughts" />
          <button type="submit" className={styles.submitButton} aria-label="Send message">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66ce6467-4da7-4a0e-bcfa-ea51433a4ab9?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.submitIcon} />
          </button>
        </form>
        <p className={styles.socialMediaText}>Follow Us on</p>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73ecc3c99643e7490362f29902421d40f835441040c6dddb32e95844f1e6ae0f?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Social media icons" className={styles.socialMediaIcons} />
      </div>
      <div className={styles.footerBottom}>
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

export default ContactInfoFooter;