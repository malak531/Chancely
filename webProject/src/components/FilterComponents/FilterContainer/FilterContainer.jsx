import React from 'react';
import styles from './FilterContainer.module.css';
import FilterWidget from './FilterWidget';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import RadioGroup from './RadioGroup';
import Button from './Button';

const FilterContainer = () => {
  const typeOptions = ['Conferences', 'Exhibitions', 'Competitions', 'Summer Programs'];
  const locationOptions = [
    { label: 'Bahrain', count: 11 },
    { label: 'Saudi Arabia', count: 131 },
    { label: 'Kuwait', count: 24 },
    { label: 'Qatar', count: 50 },
    { label: 'United Arab Emirates', count: 77 }
  ];
  const fieldOptions = [
    { label: 'Technology', count: 103 },
    { label: 'Energy', count: 103 },
    { label: 'Sustainability', count: 103 },
    { label: 'Business', count: 103 }
  ];
  const followStatusOptions = [
    { label: 'Followed Organization', count: 207 },
    { label: 'Unfollowed Organization', count: 25 }
  ];

  return (
    <section className={styles.filterContainer}>
      <header className={styles.filterHeader}>
        <h2 className={styles.filterTitle}>Filters</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/112fd8e92f6f9f8078fab38863ab1087002736c3dfc2dd017b569027aab32586?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.filterIcon} />
      </header>
      <FilterWidget title="Type" onClear={() => {}}>
        <CheckboxGroup options={typeOptions} />
      </FilterWidget>
      <FilterWidget title="Location" onClear={() => {}}>
        <CheckboxGroup options={locationOptions} showCount />
      </FilterWidget>
      <FilterWidget title="Field" onClear={() => {}}>
        <CheckboxGroup options={fieldOptions} showCount />
      </FilterWidget>
      <FilterWidget title="Date" onClear={() => {}}>
        <DatePicker />
      </FilterWidget>
      <FilterWidget title="Follow Status" onClear={() => {}}>
        <RadioGroup options={followStatusOptions} />
      </FilterWidget>
      <Button variant="secondary" className={styles.advancedFiltersBtn}>
        Advanced Filters
      </Button>
      <Button variant="primary" className={styles.applyBtn}>
        Apply
      </Button>
    </section>
  );
};

export default FilterContainer;