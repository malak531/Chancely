import React from 'react';
import styles from './EventFees.module.css';

function EventFees() {
  return (
    <section className={styles.eventFees}> {/* Corrected the class name here */}
      <div className={styles.feesInput}>
        <label htmlFor="eventFees" className={styles.label}>Event Fees*</label>
        <div className={styles.selectWrapper}>
          <select id="eventFees" className={styles.select}>
            <option>Self-Funded</option>
            <option>Partially-Funded</option>
            <option>Free</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default EventFees;
