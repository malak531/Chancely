import React from 'react';
import styles from './OrganizationProfile.module.css';

const OpportunityCard = ({ title, date, location, attendees, image }) => {
  return (
    <article className={styles.opportunityCard}>
      <img src={image} alt={title} className={styles.opportunityImage} />
      <div className={styles.opportunityInfo}>
        <div className={styles.opportunityDetails}>
          <h3 className={styles.opportunityTitle}>{title}</h3>
          <time className={styles.opportunityDate}>{date}</time>
        </div>
        <div className={styles.opportunityAttendees}>
          <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/97d128094b664ac9be4f8887290954bbc4662958237be8a2d1578d2967b3017a?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="Attendees" className={styles.attendeesIcon} />
          <span>{attendees}</span>
        </div>
      </div>
      <p className={styles.opportunityLocation}>{location}</p>
      <div className={styles.opportunityActions}>
        <button className={styles.actionButton}>View Details</button>
        <button className={styles.actionButton}>Edit</button>
      </div>
    </article>
  );
};

export default OpportunityCard;