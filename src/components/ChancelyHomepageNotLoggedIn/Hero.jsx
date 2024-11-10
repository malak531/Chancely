import React from 'react';
import styles from './Hero.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Hero = () => {
    const navigate=useNavigate();
    const handleSignUp = () => {
        navigate('/Step1');
      };
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tagline}>chase the chance</span>
        <h1 className={styles.title}>
          Explore events that inspire, educate, and connect <br /> all in one place!
        </h1>
        <p className={styles.description}>
          Unlock a World of Educational and Professional Opportunities in the Middle East.
        </p>
      </div>
    </section>
  );
};

export default Hero;