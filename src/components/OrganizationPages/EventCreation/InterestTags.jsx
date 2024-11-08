import React from 'react';
import styles from './InterestTags.module.css';

const InterestTags = ({ label }) => {
  const tags = [
    "Information Technology", "Law & Policy", "Art & Humanities",
    "Logistics & Supply Chain", "Business & Management",
    "Education & Teaching", "Agriculture & Food", "Sports",
    "Startups & Innovation", "Real Estate & Urban Development",
    "Sustainability & Environment", "Healthcare & Medicine"
  ];

  return (
    <div className={styles.interestTagsContainer}>
      <label className={styles.tagLabel}>{label}</label>
      <div className={styles.tagWrapper}>
        {tags.map((tag, index) => (
          <button key={index} type="button" className={styles.tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InterestTags;