import React from 'react';
import styles from './FormStep.module.css';

function FormStep({ step, totalSteps, description }) {
  return (
    <div className={styles.stepContainer}>
      <span className={styles.stepIndicator}>STEP {step}/{totalSteps}</span>
      <span className={styles.stepDescription}>{description}</span>
    </div>
  );
}

export default FormStep;