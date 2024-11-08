import React from 'react';
import styles from './TextAreaField.module.css';

const TextAreaField = ({ label, placeholder }) => {
  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.textAreaLabel}>{label}</label>
      <textarea className={styles.textAreaField} placeholder={placeholder} aria-label={label}></textarea>
    </div>
  );
};

export default TextAreaField;