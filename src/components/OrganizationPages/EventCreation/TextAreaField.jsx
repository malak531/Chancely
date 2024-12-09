import React from 'react';
import styles from './TextAreaField.module.css';

const TextAreaField = ({ label, name, value, placeholder, onChange }) => {
  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.textAreaLabel}>{label}</label>
      <textarea className={styles.textAreaField} name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}  aria-label={label}></textarea>
    </div>
  );
};

export default TextAreaField;