import React from 'react';
import styles from './EventOrganizerRegistration.module.css';

const SelectField = ({ label, placeholder }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <div className={styles.selectField}>
        <span>{placeholder}</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/fe44fe3d922c9b9123ec554d05c811086fb73940de649825d09372a373d2babc?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.selectIcon} />
      </div>
    </div>
  );
};

export default SelectField;