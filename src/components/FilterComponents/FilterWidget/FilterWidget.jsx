import React from 'react';
import styles from './FilterWidget.module.css';

const FilterWidget = ({ title, children, onClear }) => {
  return (
    <div className={styles.filterWidget}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>{title}</h3>
        <button onClick={onClear} className={styles.clearButton}>
          clear selection
        </button>
      </div>
      <div className={styles.filterContent}>
        {children}
      </div>
      <button className={styles.viewAllButton}>View All</button>
    </div>
  );
};

export default FilterWidget;