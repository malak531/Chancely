import React from 'react';
import styles from './DatePickerWrapper.module.css';

const DatePicker = () => {
  return (
    <div className={styles.datePickerWrapper}>
      <label htmlFor="datePicker" className={styles.visuallyHidden}>Select a date</label>
      <input
        type="date"
        id="datePicker"
        className={styles.datePicker}
        placeholder="Fecha inicio"
      />
    </div>
  );
};

export default DatePicker;