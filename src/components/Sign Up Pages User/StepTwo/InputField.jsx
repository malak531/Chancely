import React from 'react';
import styles from './InputField.module.css';

function InputField({ label, type, placeholder, id }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.inputField}
        required
      />
    </div>
  );
}

export default InputField;