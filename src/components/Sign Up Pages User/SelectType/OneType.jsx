import React from 'react';
import styles from './SelectType.module.css';

const OneType = ({ icon, title, description, arrowIcon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <img loading="lazy" src={arrowIcon} alt="" className={styles.arrowIcon} />
    </div>
  );
};

export default OneType;