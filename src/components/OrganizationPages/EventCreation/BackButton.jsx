import React from 'react';
import styles from './BackButton.module.css';

const BackButton = () => {
  return (
    <button className={styles.backButton}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a2fa9cbeafbbe21e24c346756b8b4b7be62fdd0d78e5378b19f77608d6a6aa?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.backIcon} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;