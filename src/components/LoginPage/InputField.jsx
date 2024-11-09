import React from 'react';
import styles from './LoginForm.module.css';

const InputField = ({ label, type, placeholder, icon, onChange, value, name, id }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <div className={styles.inputField}>
        {icon && <img loading="lazy" src={icon} alt="" className={styles.inputIcon} />}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={styles.inputPlaceholder}
          aria-label={label} 
          onChange={onChange}
          value={value}
          name={name}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
