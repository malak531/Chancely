import React from 'react';
import styles from './RegisterSection.module.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterSection = () => {
    const navigate=useNavigate();
    const handleSignUp = () => {
        navigate('/Step1');
      };
  return (
    <section className={styles.registerSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Want to post opportunities?</h2>
        <p className={styles.subtitle}>Register as an organisation</p>
      </div>
      <button className={styles.registerButton} onClick={handleSignUp}>Register Now</button>
    </section>
  );
};

export default RegisterSection;