import React from 'react';
import styles from './dropdown.module.css';

const dropdown = ({ label, placeholder, options=[]}) => {
  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.dropdownLabel}>{label}</label>
      <div className={styles.selectWrapper}>
        <select className={styles.selectField} aria-label={label}>
        <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
            ))}
        </select>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ffad033ec3eaf66dafb980a8cef08b93d449ad8f14058b1cddce652a55b22?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.dropdownIcon} />
      </div>
    </div>
  );
};

export default dropdown;