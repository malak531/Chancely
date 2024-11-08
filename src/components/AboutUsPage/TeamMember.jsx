import React from 'react';
import styles from './TeamMember.module.css';

function TeamMember({ name, role, image }) {
  return (
    <div className={styles.teamMember}>
      <img src={image} alt={name} className={styles.memberImage} />
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
    </div>
  );
}

export default TeamMember;