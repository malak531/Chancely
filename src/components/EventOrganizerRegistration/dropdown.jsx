import React from 'react';
import styles from './dropdown.module.css';
const Dropdown = ({ label, placeholder, onChange, options = [], name, value, error }) => {
  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.dropdownLabel}>{label}</label>
      <div className={styles.selectWrapper}>
        <select
          name={name} // Ensure name attribute is passed
          className={styles.selectField}
          value={value} // Bind value to the state
          onChange={onChange} // Trigger onChange from parent
          required
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
        {error && <div className={styles.errorMessage}>{error}</div>} {/* Show error if exists */}
      </div>
    </div>
  );
};

export default Dropdown;
