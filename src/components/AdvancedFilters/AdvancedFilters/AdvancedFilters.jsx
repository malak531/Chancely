import React from 'react';
import styles from './AdvancedFilters.module.css';
import FilterSection from './FilterSection';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import AnalyticsField from './AnalyticsField';
import LocationFilter from './LocationFilter';

function AdvancedFilters() {
  return (
    <section className={styles.advancedFilters}>
      <header className={styles.header}>
        <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/b3e577269d3b2e722eb3b86c7365a3dbe3236c2b42e3b44930b8341884144952?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.decorativeIcon} />
        <h2 className={styles.title}>Advance Filters</h2>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.filterColumns}>
          <div className={styles.leftColumn}>
            <FilterSection title="Type" clearText="clear selection">
              <CheckboxGroup
                options={[
                  'Conferences',
                  'Exhibitions',
                  'Competitions',
                  'Short Courses',
                  'Summer Programs'
                ]}
              />
            </FilterSection>
            <FilterSection title="Follow Status" clearText="clear selection">
              <div className={styles.followStatusList}>
                <div className={styles.followStatusItem}>
                  <div className={styles.radioWithLabel}>
                    <input type="radio" id="followedOrg" name="followStatus" className={styles.radioInput} />
                    <label htmlFor="followedOrg" className={styles.radioLabel}>Followed Organization</label>
                  </div>
                  <span className={styles.count}>207</span>
                </div>
                <div className={styles.followStatusItem}>
                  <div className={styles.radioWithLabel}>
                    <input type="radio" id="unfollowedOrg" name="followStatus" className={styles.radioInput} />
                    <label htmlFor="unfollowedOrg" className={styles.radioLabel}>Unfollowed Organization</label>
                  </div>
                  <span className={styles.count}>25</span>
                </div>
              </div>
            </FilterSection>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.dateAndFees}>
              <FilterSection title="Date" clearText="clear selection">
                <DatePicker />
              </FilterSection>
              <FilterSection title="Fees" clearText="clear selection">
                <CheckboxGroup
                  options={['Free', 'Partially-Funded', 'Self-Funded']}
                />
              </FilterSection>
            </div>
            <FilterSection title="Field" clearText="clear selection">
              <AnalyticsField />
            </FilterSection>
          </div>
        </div>
        <LocationFilter />
      </main>
      <footer className={styles.footer}>
        <button className={styles.applyButton}>Apply</button>
      </footer>
    </section>
  );
}

export default AdvancedFilters;