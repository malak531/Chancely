import React from 'react';
import styles from './LoginForm.module.css';

const InputField = ({ label, type, placeholder, icon }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={`${type}Input`} className={styles.inputLabel}>
        {label}
      </label>
      <div className={styles.inputField}>
        {icon && <img loading="lazy" src={icon} alt="" className={styles.inputIcon} />}
        <input
          type={type}
          id={`${type}Input`}
          placeholder={placeholder}
          className={styles.inputPlaceholder}
          aria-label={label} required
        />
      </div>
    </div>
  );
};

export default InputField;