import React from 'react';
import styles from './OrganizationFilterSection.module.css';

const FilterSection = () => {
  return (
    <aside className={styles.filterSection}>
      <h2 className={styles.filterTitle}>Filters</h2>
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Type</h3>
        <button className={styles.clearButton}>clear selection</button>
        <div className={styles.checkboxGroup}>
          {['Private', 'Non-Profit', 'Public'].map((type, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxText}>{type}</span>
            </label>
          ))}
        </div>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Location</h3>
        <button className={styles.clearButton}>clear selection</button>
        {['Bahrain', 'Saudi Arabia', 'Kuwait', 'Qatar', 'United Arab Emirates'].map((location, index) => (
          <label key={index} className={styles.radioLabel}>
            <input type="radio" name="location" className={styles.radio} />
            <span className={styles.radioText}>{location}</span>
          </label>
        ))}
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Field</h3>
        <button className={styles.clearButton}>clear selection</button>
        {['Technology', 'Energy', 'Sustainability', 'Business'].map((field, index) => (
          <label key={index} className={styles.radioLabel}>
            <input type="radio" name="field" className={styles.radio} />
            <span className={styles.radioText}>{field}</span>
          </label>
        ))}
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <button className={styles.applyButton}>Apply</button>
    </aside>
  );
};

export default FilterSection;