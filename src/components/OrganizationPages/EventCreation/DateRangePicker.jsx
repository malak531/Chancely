import React from 'react';
import styles from './DateRangePicker.module.css';

const DateRangePicker = ({ label, singleDate = false }) => {
  return (
    <div className={styles.datePickerContainer}>
      <label className={styles.dateLabel}>{label}</label>
      <div className={styles.dateInputWrapper}>
        <input type="date" className={styles.dateInput} aria-label="Start date" />
        {!singleDate && (
          <>
            <span className={styles.dateSeparator}>-</span>
            <input type="date" className={styles.dateInput} aria-label="End date" />
          </>
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;