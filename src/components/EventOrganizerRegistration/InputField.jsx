import React from 'react';
import styles from './EventOrganizerRegistration.module.css';

const InputField = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;