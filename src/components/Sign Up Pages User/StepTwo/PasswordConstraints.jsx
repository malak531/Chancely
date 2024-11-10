import React from 'react';
import styles from './PasswordConstraints.module.css';

const constraints = [
  { id: 'length', text: 'At least 6 characters', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b11b6d892cb15885231c25faa4df30bfd75c0b368e4d5c8d366dea08e4d245f9?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
];

function PasswordConstraints() {
  return (
    <ul className={styles.constraintsList}>
      {constraints.map((constraint) => (
        <li key={constraint.id} className={styles.constraintItem}>
          <img src={constraint.icon} alt="" className={styles.constraintIcon} />
          <span className={styles.constraintText}>{constraint.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default PasswordConstraints;