import React, { useState } from 'react';
import styles from './InterestTags.module.css';

const InterestTags = ({ label }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = [
    'Information Technology',
    'Law & Policy',
    'Art & Humanities',
    'Logistics & Supply Chain',
    'Business & Management',
    'Education & Teaching',
    'Agriculture & Food',
    'Sports',
    'Startups & Innovation',
    'Real Estate & Urban Development',
    'Sustainability & Environment',
    'Healthcare & Medicine'
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className={styles.interestTagsContainer}>
      <label className={styles.tagLabel}>{label}</label>
      <div className={styles.tagWrapper}>
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`${styles.tag} ${selectedTags.includes(tag) ? styles.selected : ''}`}
            type="button"
            onClick={() => toggleTag(tag)}
            aria-pressed={selectedTags.includes(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InterestTags;