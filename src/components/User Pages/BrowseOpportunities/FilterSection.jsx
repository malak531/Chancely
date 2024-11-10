import React from 'react';
import styles from './FilterSection.module.css';

const FilterSection = () => {
  return (
    <aside className={styles.filterSection}> {/* Main container for the filter section */}
      <h2 className={styles.filterTitle}>Filters</h2> {/* Section title */}
      
      {/* Type filter group */}
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Type</h3> {/* Group title */}
        <button className={styles.clearButton}>clear selection</button> {/* Clear selection button */}
        <div className={styles.checkboxGroup}> {/* Group of checkboxes */}
          {/* Map over types and render checkboxes */}
          {['Conferences', 'Exhibitions', 'Competitions', 'Summer Programs'].map((type, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} /> {/* Checkbox input */}
              <span className={styles.checkboxText}>{type}</span> {/* Checkbox label text */}
            </label>
          ))}
        </div>
        <button className={styles.viewAllButton}>View All</button> {/* Button to view all types */}
      </div>
      
      {/* Location filter group */}
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Location</h3> {/* Group title */}
        <button className={styles.clearButton}>clear selection</button> {/* Clear selection button */}
        {/* Map over locations and render radio buttons */}
        {['Bahrain', 'Saudi Arabia', 'Kuwait', 'Qatar', 'United Arab Emirates'].map((location, index) => (
          <label key={index} className={styles.radioLabel}>
            <input type="radio" name="location" className={styles.radio} /> {/* Radio button for location */}
            <span className={styles.radioText}>{location}</span> {/* Radio button label text */}
          </label>
        ))}
        <button className={styles.viewAllButton}>View All</button> {/* Button to view all locations */}
      </div>

      {/* Field filter group */}
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Field</h3> {/* Group title */}
        <button className={styles.clearButton}>clear selection</button> {/* Clear selection button */}
        {/* Map over fields and render radio buttons */}
        {['Technology', 'Energy', 'Sustainability', 'Business'].map((field, index) => (
          <label key={index} className={styles.radioLabel}>
            <input type="radio" name="field" className={styles.radio} /> {/* Radio button for field */}
            <span className={styles.radioText}>{field}</span> {/* Radio button label text */}
          </label>
        ))}
        <button className={styles.viewAllButton}>View All</button> {/* Button to view all fields */}
      </div>

      {/* Date filter group */}
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Date</h3> {/* Group title */}
        <button className={styles.clearButton}>clear selection</button> {/* Clear selection button */}
        <input type="date" className={styles.dateInput} aria-label="Select date" /> {/* Date input field */}
        <button className={styles.viewAllButton}>View All</button> {/* Button to view all dates */}
      </div>

      {/* Follow status filter group */}
      <div className={styles.filterGroup}>
        <h3 className={styles.filterGroupTitle}>Follow Status</h3> {/* Group title */}
        <button className={styles.clearButton}>clear selection</button> {/* Clear selection button */}
        {/* Map over follow status options and render radio buttons */}
        <label className={styles.radioLabel}>
          <input type="radio" name="followStatus" className={styles.radio} /> {/* Radio button for Followed Organization */}
          <span className={styles.radioText}>Followed Organization</span> {/* Radio button label text */}
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="followStatus" className={styles.radio} /> {/* Radio button for Unfollowed Organization */}
          <span className={styles.radioText}>Unfollowed Organization</span> {/* Radio button label text */}
        </label>
      </div>

      {/* Buttons for advanced filters and apply */}
      <button className={styles.advancedFiltersButton}>Advanced Filters</button> {/* Button to show advanced filters */}
      <button className={styles.applyButton}>Apply</button> {/* Button to apply selected filters */}
    </aside>
  );
};

export default FilterSection;
