import React from 'react';
import styles from './contactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a19290bdc82f9d6994f3ec642a8fc5c3190b43262a36f88179974ff84bb835e?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="KFUPM Campus" className={styles.campusImage} />
        <div className={styles.infoContent}>
          <p className={styles.address}>KFUPM, Dhahran<br />Saudi Arabia</p>
          <p className={styles.phone}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1305d16472ae2cadcea6366093adbb42ae99f87b60b4496589320472c01433a?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="" className={styles.icon} />
            +966585673359
          </p>
          <p className={styles.email}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc6a131374ebf4c0d27621616a53e5efe7febcd9cdfa2ed7980e1857fa58dba?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="" className={styles.icon} />
            support@chancely.com
          </p>
        </div>
      </div>
      <div className={styles.messageForm}>
        <h2 className={styles.formTitle}>Have anything to say?<br />Leave us a message</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Write your thoughts" className={styles.input} aria-label="Write your message" />
          <button type="submit" className={styles.submitButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/362ea4f4-ed1f-46dd-8224-6bd655a8aae9?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="Send" className={styles.sendIcon} />
          </button>
        </form>
        <div className={styles.socialMedia}>
          <h3 className={styles.socialTitle}>Follow Us on</h3>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e3a42164cc575fcf68cf476b723d03addfa1995a1f6e182e664c331c82c1b96?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="Social Media Icons" className={styles.socialIcons} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;