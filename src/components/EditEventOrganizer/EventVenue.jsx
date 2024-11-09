import React from 'react';
import styles from './EventVenue.module.css';

function EventVenue() {
  return (
    <section className={styles.eventVenue}>
      <div className={styles.venueInput}>
        <label htmlFor="eventVenue" className={styles.label}>Event Venue*</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="eventVenue"
            className={styles.input}
            value="Doha Exhibition and Convention Center"
            readOnly
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9c1d2f3460aed33d0b7b8105f54824979d024f177a8a57c35be4c76a814bb0?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.inputIcon} />
        </div>
      </div>
      <div className={styles.locationInput}>
        <label htmlFor="eventLocation" className={styles.label}>Event Location*</label>
        <div className={styles.selectWrapper}>
          <select id="eventLocation" className={styles.select}>
            <option>Doha, Qatar</option>
          </select>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/192efd70a8a0849900a1062cb894ae1e26b5e01f5fe2a5e00b532e15b5845d50?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.selectIcon} />
        </div>
      </div>
    </section>
  );
}

export default EventVenue;