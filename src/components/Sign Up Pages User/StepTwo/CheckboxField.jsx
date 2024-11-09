import React from 'react';
import styles from './CheckboxField.module.css';

function CheckboxField({ id, label }) {
  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id={id} className={styles.checkboxInput} />
      <label htmlFor={id} className={styles.checkboxLabel}>{label}</label>
    </div>
  );
}

export default CheckboxField;