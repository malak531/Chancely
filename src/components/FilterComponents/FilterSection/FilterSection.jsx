import React from 'react';
import styles from './filterSection.module.css';

function FilterSection({ title, clearText, children }) {
  return (
    <section className={styles.filterSection}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.clearButton}>{clearText}</button>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default FilterSection;