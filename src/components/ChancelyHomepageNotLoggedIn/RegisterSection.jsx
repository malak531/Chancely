import React from 'react';
import styles from './RegisterSection.module.css';

const RegisterSection = () => {
  return (
    <section className={styles.registerSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Want to post opportunities?</h2>
        <p className={styles.subtitle}>Register as an organisation</p>
      </div>
      <button className={styles.registerButton}>Register Now</button>
    </section>
  );
};

export default RegisterSection;