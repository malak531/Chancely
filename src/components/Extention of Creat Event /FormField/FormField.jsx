import React from 'react';
import styles from './FormField.module.css';

const FormField = ({ label, type, placeholder }) => {
  const id = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.fieldLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.fieldInput}
        aria-label={label}
      />
    </div>
  );
};

export default FormField;