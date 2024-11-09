import React from 'react';
import styles from './ProfileCard.module.css';
import InfoItem from './InfoItem';

const ProfileCard = () => {
  let userInfo = {
    name: 'Zainab Alturaiki',
    email: 'zainabtura2002@gmail.com',
    avatarSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c22613a27e1931521cbcde9f9441f24166547f2a4806fbb7787dabe2c9d7c10?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a',
  };

  let infoItems = [
    { label: 'Name', value: 'Zainab' },
    { label: 'Email', value: 'zainabtura2002@gmail.com' },
  ];

  return (
    <section className={styles.profileCard}>
      <div className={styles.userInfo}>
        <div className={styles.userDetails}>
          <div className={styles.userHeader}>
            <img src={userInfo.avatarSrc} alt={`${userInfo.name}'s avatar`} className={styles.avatar} />
            <h2 className={styles.userName}>{userInfo.name}</h2>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        {infoItems.map((item, index) => (
          <InfoItem key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default ProfileCard;