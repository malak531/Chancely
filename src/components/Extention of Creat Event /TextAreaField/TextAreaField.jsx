import React from 'react';
import styles from './TextAreaField.module.css';

const TextAreaField = ({ label, placeholder }) => {
  const id = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={styles.textAreaField}>
      <label htmlFor={id} className={styles.textAreaLabel}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={styles.textAreaInput}
        aria-label={label}
      ></textarea>
    </div>
  );
};

export default TextAreaField;