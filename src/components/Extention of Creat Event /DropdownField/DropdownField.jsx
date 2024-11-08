import React from 'react';
import styles from './DropdownField.module.css';

const DropdownField = ({ label, options }) => {
  const id = label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={styles.dropdownField}>
      <label htmlFor={id} className={styles.dropdownLabel}>
        {label}
      </label>
      <div className={styles.selectWrapper}>
        <select
          id={id}
          className={styles.selectInput}
          aria-label={label}
        >
          {options.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
        <img src="/images/dropdown-arrow.svg" alt="" className={styles.dropdownIcon} />
      </div>
    </div>
  );
};

export default DropdownField;