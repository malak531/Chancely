import React from 'react';
import styles from './FormField.module.css';

const FormField = ({ label, name, value, placeholder, onChange}) => {
  return (
    <div className={styles.formFieldContainer}>
      <label className={styles.fieldLabel}>{label}</label>
      <input type="text" className={styles.fieldInput} name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} aria-label={label} required />
    </div>
  );
};

export default FormField;