import React from 'react';
import styles from './ActionButton.module.css';

const ActionButton = ({ href, text }) => {
  return (
    <a href={href} className={styles.actionButton} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default ActionButton;