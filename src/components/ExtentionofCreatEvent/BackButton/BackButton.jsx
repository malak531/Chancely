import React from 'react';
import styles from './BackButton.module.css';

const BackButton = () => {
  return (
    <button className={styles.backButton}>
      <img src="/images/back-arrow.svg" alt="" className={styles.backIcon} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;