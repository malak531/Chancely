import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon, title }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={icon} alt="" className={styles.serviceIcon} />
      <h3 className={styles.serviceTitle}>{title}</h3>
    </div>
  );
};

export default ServiceCard;