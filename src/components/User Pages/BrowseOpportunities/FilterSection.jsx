import React from 'react';
import styles from './FilterSection.module.css';

const FilterSection = () => {
  return (
    <aside className={styles.filterSection}>
      <h2 className={styles.filterTitle}>Filters</h2>
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Type</h3>
        <button className={styles.clearButton}>clear selection</button>
        <div className={styles.checkboxGroup}>
          {['Conferences', 'Exhibitions', 'Competitions', 'Summer Programs'].map((type, index) => (
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
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Date</h3>
        <button className={styles.clearButton}>clear selection</button>
        <input type="date" className={styles.dateInput} aria-label="Select date" />
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Follow Status</h3>
        <button className={styles.clearButton}>clear selection</button>
        <label className={styles.radioLabel}>
          <input type="radio" name="followStatus" className={styles.radio} />
          <span className={styles.radioText}>Followed Organization</span>
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="followStatus" className={styles.radio} />
          <span className={styles.radioText}>Unfollowed Organization</span>
        </label>
      </div>
      <button className={styles.advancedFiltersButton}>Advanced Filters</button>
      <button className={styles.applyButton}>Apply</button>
    </aside>
  );
};

export default FilterSection;