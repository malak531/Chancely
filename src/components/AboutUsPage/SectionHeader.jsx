import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ icon, label, title, description }) => {
  return (
    <section className={styles.sectionHeader}>
      <div className={styles.headerContent}>
        <div className={styles.labelWrapper}>
          <div className={styles.iconLabel}>
            <img src={icon} alt="" className={styles.icon} />
          </div>
          <span className={styles.label}>{label}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default SectionHeader;