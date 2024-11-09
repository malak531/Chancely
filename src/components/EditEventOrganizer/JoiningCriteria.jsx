import React from 'react';
import styles from './JoiningCriteria.module.css';

function JoiningCriteria() {
  return (
    <section className={styles.joiningCriteria}>
      <div className={styles.criteriaHeader}>
        <h3 className={styles.criteriaTitle}>Joining criteria*</h3>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e854247e4b3cc18fc6536938ad86f7135bd394204cd2c0277d71a57b5031b9f8?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.infoIcon} />
      </div>
      <textarea
        className={styles.criteriaInput}
        placeholder="1."
        aria-label="Joining criteria"
      ></textarea>
    </section>
  );
}

export default JoiningCriteria;