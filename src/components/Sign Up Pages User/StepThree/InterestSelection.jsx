import React, { useState } from 'react';
import styles from './InterestSelection.module.css';
import InterestCard from './InterestCard';
import { useNavigate } from 'react-router-dom';

const interestData = [
  { id: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/67b0889a5970ba1e0ab13f22a727f1f35334d36126585ed4f791986a05ce60a9?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Information Technology" },
  { id: 2, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fc89b7af654d844dc736a2c99dd0a9bedce3c82033ee217ebfcd8db59188a51?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Education & Teaching" },
  { id: 3, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a3510615bc65f51d860234f2156d06ed0742b80916c8ff8328123fa3a178b40?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Healthcare & Medicine" },
  { id: 4, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b55e2087dc76f713b2cf463bd7dfd7ef59b3275898e1382b76da1348a111707?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Sustainability & Environment" },
  { id: 5, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55d062418b0a07136bb80c9ffd54a7e19f0ada2c2a9ef0a2479956fa3f0e8b5f?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Arts & Humanities" },
  { id: 6, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e5c629e914b1a25a01ed1d553366f398b29db10d498edfb9da106a44b2399a7?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Business and Management" },
  { id: 7, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c2ddfad5a3c944117de8a4fbf2ee3e33b6adebeee24f0f20d49ec447979de81?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Law & Policy" },
  { id: 8, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/af9f49e53715df5ab1a566d6ff1de7c88a97021b1dbc78ef5c2f814184bc0ec7?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Startups & Innovation" },
  { id: 9, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1009de2feb543449641b56d2db51155da14c640cae63bbbcda2d46fda40c19b4?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Real Estate and Urban Devolpment" },
  { id: 10, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d40452822a4c6723540c938847c442876f8c894054293a07da76f598a06b7b97?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Agriculture & Food" },
  { id: 11, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/74c8a7ae198554700c8d7ef27e6ffa5fe986f9aee9d5510b54cd8398b65ce87a?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Logistics & Supply Chain" },
  { id: 12, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/520645787028ac8a06d7cd971e6838d927371de7b06e7dbeadfb7946ca5ebaf5?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "Sports" },
];

function InterestSelection() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const handleInterestClick = (id) => {
    setSelectedInterests((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedInterests.length >= 3) {
      console.log('Selected interests:', selectedInterests);
      navigate('/Step4')
    } else {
      alert('Please select at least 3 interests before continuing.');
    }
  };

  return (
    <section className={styles.interestSelection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <header>
            <div className={styles.stepIndicator}>STEP 02/03</div>
            <div className={styles.interestsLabel}>Interests</div>
          </header>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>Event Types You're Interested In</h1>
            <p className={styles.subtitle}>check the 3 or more fields that interest you the most!</p>
          </div>
          <div className={styles.interestGrid}>
            {[0, 1, 2].map((rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {[0, 1, 2].map((colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  const interest = interestData[index];
                  return (
                    <div key={colIndex} className={styles.column}>
                      {interest.text ? (
                        <InterestCard
                          imageSrc={interest.imageSrc}
                          text={interest.text}
                          isSelected={selectedInterests.includes(interest.id)}
                          onClick={() => handleInterestClick(interest.id)}
                        />
                      ) : (
                        <img src={interest.imageSrc} alt="" className={styles.interestImage} />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Save and Continue
          </button>
        </div>
      </div>
    </section>
  );
}

export default InterestSelection;