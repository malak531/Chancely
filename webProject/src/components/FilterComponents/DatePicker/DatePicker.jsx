import React from 'react';
import styles from './DatePicker.module.css';

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
      <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/ca8755311bda4a0418953c26aeab96db1b367ff79d0bde1e0dd9f4aaaad01c6d?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.calendarIcon} />
    </div>
  );
};

export default DatePicker;