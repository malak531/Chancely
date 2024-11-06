import React from 'react';
import styles from './AnalyticsField.module.css';

function AnalyticsField() {
  const fields = [
    'Information Technology',
    'Education & Teaching',
    'Healthcare & Medicine',
    'Sustainability & Environment',
    'Art & Humanities',
    'Business & Management',
    'Law & Policy',
    'Startups & Innovation',
    'Real Estate & Urban Development',
    'Agriculture & Food',
    'Logistics & Supply Chain',
    'Sports'
  ];

  return (
    <div className={styles.analyticsField}>
      {fields.map((field, index) => (
        <button key={index} className={styles.fieldButton}>
          {field}
        </button>
      ))}
    </div>
  );
}

export default AnalyticsField;