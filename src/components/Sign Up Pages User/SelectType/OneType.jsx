import React from 'react';
import styles from './SelectType.module.css';
import { Link } from 'react-router-dom';


const OneType = ({ title, description, arrowIcon, link }) => {
  return (
    <div className={styles.card}>
      <Link to={link}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <img loading="lazy" src={arrowIcon} alt="" className={styles.arrowIcon} />
      </Link>
    </div>
  );
};

export default OneType;