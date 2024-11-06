import React from 'react';
import styles from './locationFilter.module.css';

function LocationFilter() {
  const locations = [
    { name: 'Bahrain', count: 9 },
    { name: 'Saudi Arabia', count: 56 },
    { name: 'Lebanon', count: 103 },
    { name: 'Jordan', count: 11 },
    { name: 'Kuwait', count: 98 },
    { name: 'Yemen', count: 98 },
    { name: 'Egypt', count: 12 },
    { name: 'Syria', count: 12 },
    { name: 'Oman', count: 98 },
    { name: 'United Arab Emirates', count: 57 },
    { name: 'Qatar', count: 12 },
    { name: 'Iraq', count: 12 },
  ];

  return (
    <section className={styles.locationFilter}>
      <h3 className={styles.title}>Location</h3>
      <button className={styles.clearButton}>clear selection</button>
      <div className={styles.locationGrid}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationItem}>
            <label className={styles.locationLabel}>
              <input type="checkbox" className={styles.locationCheckbox} />
              <span className={styles.locationName}>{location.name}</span>
            </label>
            <span className={styles.locationCount}>{location.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationFilter;