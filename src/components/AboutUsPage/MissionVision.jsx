import React from 'react';
import styles from './MissionVision.module.css';

const MissionVision = ({ icon, label, title, description }) => {
  return (
    <section className={styles.missionVision}>
      <div className={styles.missionVisionContent}>
        <div className={styles.labelWrapper}>
          <div className={styles.iconLabel}>
            <img src={icon} alt="" className={styles.icon} />
          </div>
          <span className={styles.label}>{label}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default MissionVision;