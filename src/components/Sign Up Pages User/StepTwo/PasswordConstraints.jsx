import React from 'react';
import styles from './PasswordConstraints.module.css';

const constraints = [
  { id: 'strength', text: 'Password Strength : Weak', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63f99c25d85ebc4a28550c88007c91c1c05fd564ac18713eaab20e46079f7b14?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { id: 'nameEmail', text: 'Cannot contain your name or email address', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cac716049943e6616ad9ad810c6e9025972e1ec830959d6a8d36ca3e32b9d430?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { id: 'length', text: 'At least 8 characters', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b11b6d892cb15885231c25faa4df30bfd75c0b368e4d5c8d366dea08e4d245f9?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { id: 'numberSymbol', text: 'Contains a number or symbol', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/47be81e207568ad703392a55aab5750a2288812b986f32f21c56bbd54077ae92?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
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