import React from 'react';
import styles from './CheckboxGroup.module.css';

const CheckboxGroup = ({ options, showCount = false }) => {
  return (
    <div className={styles.checkboxGroup}>
      {options.map((option, index) => (
        <div key={index} className={styles.checkboxItem}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkboxInput} />
            <span className={styles.checkboxText}>{typeof option === 'string' ? option : option.label}</span>
          </label>
          {showCount && typeof option !== 'string' && (
            <span className={styles.optionCount}>{option.count}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;