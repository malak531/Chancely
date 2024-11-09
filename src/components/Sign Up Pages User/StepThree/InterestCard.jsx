import React from 'react';
import styles from './InterestSelection.module.css';

const InterestCard = ({ imageSrc, text, isSelected, onClick }) => {
  return (
    <div
      className={`${styles.interestCard} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <img src={imageSrc} alt="" className={styles.interestImage} />
      <div className={styles.interestText}>{text}</div>
    </div>
  );
};

export default InterestCard;