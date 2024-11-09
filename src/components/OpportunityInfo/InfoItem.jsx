import React from 'react';
import styles from './InfoItem.module.css';

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className={styles.infoItemWrapper}>
      <div className={styles.infoItem}>
        <img loading="lazy" src={icon} alt="" className={styles.infoIcon} />
        <div className={styles.infoLabel}>{label}</div>
      </div>
      <div className={styles.infoValue}>{value}</div>
    </div>
  );
};

export default InfoItem;