import React from 'react';
import styles from './EventFields.module.css';

function EventFields() {
  const fields = [
    "Information Technology",
    "Law & Policy",
    "Art & Humanities",
    "Logistics & Supply Chain",
    "Business & Management",
    "Education & Teaching",
    "Agriculture & Food",
    "Sports",
    "Startups & Innovation",
    "Real Estate & Urban Development",
    "Sustainability & Environment",
    "Healthcare & Medicine"
  ];

  return (
    <section className={styles.eventFields}>
      {fields.map((field, index) => (
        <button key={index} className={styles.fieldButton}>
          {field}
        </button>
      ))}
    </section>
  );
}

export default EventFields;