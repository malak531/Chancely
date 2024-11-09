import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ image, title, date, location, isPopular }) => {
  return (
    <article className={styles.eventCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={`Event: ${title}`} className={styles.eventImage} />
        {/* {isPopular && (
          <div className={styles.popularTag}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4d179dc4aa977e302e2de9b857dafa4fc14bc5e55e7e5b1d4771a95b3db8bf?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.popularIcon} />
            <span className={styles.popularText}>Popular</span>
          </div>
        )} */}
      </div>
      <h3 className={styles.eventTitle}>{title}</h3>
      <p className={styles.eventDate}>{date}</p>
      <p className={styles.eventLocation}>{location}</p>
      <a href="#" className={styles.viewDetails}>View Details</a>
    </article>
  );
};

export default EventCard;