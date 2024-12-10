import React from 'react';
import styles from './EventOrganizerRegistration.module.css';

const InputField = ({ label, placeholder, type = 'text', onChange, name, value, error }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        name={name} // Ensure name attribute is passed
        className={styles.inputField}
        placeholder={placeholder}
        onChange={onChange} // Trigger onChange from parent
        value={value} // Bind value to the state
        required
      />
      {error && <div className={styles.errorMessage}>{error}</div>} {/* Show error if exists */}
    </div>
  );
};

export default InputField;
