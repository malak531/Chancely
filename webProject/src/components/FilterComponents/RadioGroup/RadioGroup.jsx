import React from 'react';
import styles from './RadioGroup.module.css';

const RadioGroup = ({ options }) => {
  return (
    <div className={styles.radioGroup}>
      {options.map((option, index) => (
        <div key={index} className={styles.radioItem}>
          <label className={styles.radioLabel}>
            <input type="radio" name="followStatus" className={styles.radioInput} />
            <span className={styles.radioText}>{option.label}</span>
          </label>
          <span className={styles.optionCount}>{option.count}</span>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;