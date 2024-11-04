import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tagline}>chase the chance</span>
        <h1 className={styles.title}>
          Explore events that inspire, educate, and connect all in one place!
        </h1>
        <p className={styles.description}>
          Unlock a World of Educational and Professional Opportunities in the Middle East.
        </p>
        <button className={styles.cta}>Sign Up Now!</button>
      </div>
    </section>
  );
};

export default Hero;