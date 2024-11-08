import React, { useState } from 'react';
import styles from './DateRangePicker.module.css';

const DateRangePicker = ({ label }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className={styles.dateRangeContainer}>
      <label htmlFor="startDate" className={styles.dateLabel}>{label}</label>
      <div className={styles.dateInputWrapper}>
        <input
          type="date"
          id="startDate"
          className={styles.dateInput}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          aria-label="Start date"
        />
        <span className={styles.dateSeparator}>
          <img src="/images/date-separator.svg" alt="" className={styles.separatorIcon} />
        </span>
        <input
          type="date"
          id="endDate"
          className={styles.dateInput}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          aria-label="End date"
        />
        <img src="/images/calendar-icon.svg" alt="" className={styles.calendarIcon} />
      </div>
    </div>
  );
};

export default DateRangePicker;