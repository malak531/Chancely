import React from 'react';
import styles from './EventDates.module.css';

function EventDates() {
  return (
    <section className={styles.eventDates}>
      <div className={styles.dateRange}>
        <label htmlFor="eventDates" className={styles.label}>Event Dates*</label>
        <div className={styles.datePickerWrapper}>
          <input
            type="text"
            id="eventDates"
            className={styles.datePicker}
            value="30/May/2023 - 31/May/2023"
            readOnly
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06df01c1068c643b48aaefd71d03ed83dd025ab1f0a40eb6f2aca9e26baf0759?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.calendarIcon} />
        </div>
      </div>
      <div className={styles.deadline}>
        <label htmlFor="registrationDeadline" className={styles.label}>Registration Deadline*</label>
        <div className={styles.datePickerWrapper}>
          <input
            type="text"
            id="registrationDeadline"
            className={styles.datePicker}
            placeholder="Fecha inicio"
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06df01c1068c643b48aaefd71d03ed83dd025ab1f0a40eb6f2aca9e26baf0759?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.calendarIcon} />
        </div>
      </div>
    </section>
  );
}

export default EventDates;