import React from 'react';
import styles from './EventTitle.module.css';

function EventTitle() {
  return (
    <section className={styles.eventTitle}> {/* Corrected class name here */}
      <div className={styles.titleInput}> {/* Corrected class name here */}
        <label htmlFor="eventTitle" className={styles.label}>Event Title*</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="eventTitle"
            className={styles.input}
            value="Web Summit Qatar"
            readOnly
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9c1d2f3460aed33d0b7b8105f54824979d024f177a8a57c35be4c76a814bb0?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.inputIcon} />
        </div>
      </div>
    </section>
  );
}

export default EventTitle;
