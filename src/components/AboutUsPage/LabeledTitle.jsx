import React from 'react';
import styles from './LabeledTitle.module.css';

function LabeledTitle({ iconSrc, labelText, titleText }) {
  return (
    <header className={styles.titleContainer}>
      <div className={styles.labelWrapper}>
        <div className={styles.iconLabel}>
          <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
        </div>
        <span className={styles.labelText}>{labelText}</span>
      </div>
      <h1 className={styles.titleText}>{titleText}</h1>
    </header>
  );
}

export default LabeledTitle;