import React, { useState } from 'react';
import styles from './InterestsSection.module.css';
import InterestTag from './InterestTag';

const InterestsSection = () => {
  // State for managing the list of interests and their active status
  const [interests, setInterests] = useState([
    { text: 'Information Technology', isActive: true },
    { text: 'Law & Policy', isActive: false },
    { text: 'Art & Humanities', isActive: false },
    { text: 'Education & Teaching', isActive: false },
    { text: 'Real Estate & Urban Development', isActive: false },
    { text: 'Sports', isActive: false },
    { text: 'Agriculture & Food', isActive: false },
    { text: 'Startups & Innovation', isActive: true },
    { text: 'Logistics & Supply Chain', isActive: false },
    { text: 'Business & Management', isActive: true },
    { text: 'Sustainability & Environment', isActive: false },
    { text: 'Healthcare & Medicine', isActive: false },
  ]);

  // Function to toggle the active status of an interest when clicked
  const toggleInterest = (index) => {
    setInterests(prevInterests =>
      prevInterests.map((interest, i) =>
        i === index ? { ...interest, isActive: !interest.isActive } : interest
      )
    );
  };

  // Splitting the interests into two groups for primary and secondary
  const primaryInterests = interests.slice(0, 8); // First 8 interests
  const secondaryInterests = interests.slice(8); // Remaining interests

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Interests</h2>
      <div className={styles.tagContainer}>
        {/* Rendering primary interests */}
        <div className={styles.tagGroup}>
          {primaryInterests.map((interest, index) => (
            <InterestTag
              key={index} // Unique key for each tag (based on index here)
              text={interest.text} // Text for the interest
              isActive={interest.isActive} // Whether the interest is active or not
              onClick={() => toggleInterest(index)} // Toggle function on click
            />
          ))}
        </div>
      </div>
      {/* Rendering secondary interests */}
      <div className={styles.secondaryTagGroup}>
        {secondaryInterests.map((interest, index) => (
          <InterestTag
            key={index + primaryInterests.length} // Adjusted key to ensure uniqueness
            text={interest.text}
            isActive={interest.isActive}
            onClick={() => toggleInterest(index + primaryInterests.length)} // Adjusted index for secondary interests
          />
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
