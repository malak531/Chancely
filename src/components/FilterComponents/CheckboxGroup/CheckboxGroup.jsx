import React, { useState } from 'react';
import styles from './CheckboxGroup.module.css';

const CheckboxItem = ({ label, checked, onChange }) => (
  <div className={styles.item}>
    <label className={styles.radioWrapper}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.controller}>
        <div className={`${styles.thumb} ${checked ? styles.checked : ''}`} />
      </div>
      <div className={styles.label}>{label}</div>
    </label>
  </div>
);

const CheckboxGroup = () => {
  const [checkedItems, setCheckedItems] = useState({
    Conferences: false,
    Exhibitions: false,
    Competitions: false,
    'Short Courses': false,
    'Summer Programs': false,
  });

  const handleChange = (item) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };

  return (
    <section className={styles.group}>
      {Object.entries(checkedItems).map(([item, checked]) => (
        <CheckboxItem
          key={item}
          label={item}
          checked={checked}
          onChange={() => handleChange(item)}
        />
      ))}
    </section>
  );
};

export default CheckboxGroup;