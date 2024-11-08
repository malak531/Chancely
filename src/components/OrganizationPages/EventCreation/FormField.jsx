import React from 'react';
import styles from './FormField.module.css';

const FormField = ({ label, placeholder }) => {
  return (
    <div className={styles.formFieldContainer}>
      <label className={styles.fieldLabel}>{label}</label>
      <input type="text" className={styles.fieldInput} placeholder={placeholder} aria-label={label} />
    </div>
  );
};

export default FormField;