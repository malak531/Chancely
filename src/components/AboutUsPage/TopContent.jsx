import React from 'react';
import styles from './TopContent.module.css';

const TopContent = () => {
  return (
    <main className={styles.mainContent}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          We're here to
          <br />
          <span className={styles.highlightedText}>Connect People with Opportunities Across the Middle East</span>
        </h1>
        <div className={styles.divider} />
      </section>
      <section className={styles.missionStatement}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3ab73c886e95234ec88543ca6ffcfc51ae4a0d958e1e123488aa67eba27296b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.backgroundImage} />
        <p className={styles.missionText}>
          At Chancely, we believe in the power of education, professional growth, and community. Our platform serves as a bridge between individuals and the incredible opportunities available to them—whether they are students, professionals, or innovators looking to expand their skills and network.
        </p>
      </section>
    </main>
  );
};

export default TopContent;