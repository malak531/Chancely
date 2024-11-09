import React from 'react';
import styles from './InterestTag.module.css';

const InterestTag = ({ text, isActive, onClick }) => {
  return (
    <div
      className={`${styles.tag} ${isActive ? styles.active : styles.inactive}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {text}
    </div>
  );
};

export default InterestTag;