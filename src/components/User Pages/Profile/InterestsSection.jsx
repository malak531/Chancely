import React, { useState } from 'react';
import styles from './InterestsSection.module.css';
import InterestTag from './InterestTag';

const InterestsSection = () => {
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

  const toggleInterest = (index) => {
    setInterests(prevInterests =>
      prevInterests.map((interest, i) =>
        i === index ? { ...interest, isActive: !interest.isActive } : interest
      )
    );
  };

  const primaryInterests = interests.slice(0, 8);
  const secondaryInterests = interests.slice(8);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Interests</h2>
      <div className={styles.tagContainer}>
        <div className={styles.tagGroup}>
          {primaryInterests.map((interest, index) => (
            <InterestTag
              key={index}
              text={interest.text}
              isActive={interest.isActive}
              onClick={() => toggleInterest(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.secondaryTagGroup}>
        {secondaryInterests.map((interest, index) => (
          <InterestTag
            key={index + primaryInterests.length}
            text={interest.text}
            isActive={interest.isActive}
            onClick={() => toggleInterest(index + primaryInterests.length)}
          />
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;