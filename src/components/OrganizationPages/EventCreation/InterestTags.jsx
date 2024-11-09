import React, { useState } from 'react';
import styles from './InterestTags.module.css';

const InterestTags = ({ label }) => {
  const tags = [
    "Information Technology", "Law & Policy", "Art & Humanities",
    "Logistics & Supply Chain", "Business & Management",
    "Education & Teaching", "Agriculture & Food", "Sports",
    "Startups & Innovation", "Real Estate & Urban Development",
    "Sustainability & Environment", "Healthcare & Medicine"
  ];

  // State to keep track of selected tags
  const [selectedTags, setSelectedTags] = useState([]);

  // Toggle selected state of a tag
  const toggleTag = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag) // Remove tag if already selected
        : [...prevSelectedTags, tag] // Add tag if not selected
    );
  };

  return (
    <div className={styles.interestTagsContainer}>
      <label className={styles.tagLabel}>{label}</label>
      <div className={styles.tagWrapper}>
        {tags.map((tag, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.tag} ${selectedTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InterestTags;
