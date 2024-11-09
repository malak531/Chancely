import React from 'react';
import styles from './EventDescription.module.css';

function EventDescription() {
  return (
    <section className={styles.eventDescription}>
      <div className={styles.descriptionHeader}>
        <h3 className={styles.descriptionTitle}>Event Description*</h3>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a62da02b27d95778e98547b0b1e9c544ee4cb55aa2812bce9020d6b3197a424?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.infoIcon} />
      </div>
      <textarea
        className={styles.descriptionInput}
        placeholder="This event aims to ...."
        aria-label="Event description"
      ></textarea>
    </section>
  );
}

export default EventDescription;