import React from 'react';
import styles from './EventCard.module.css';
import { AuthProvider } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const EventCard = ({ image, title, date, location, isPopular }) => {
    const navigate=useNavigate();
    const { isLoggedIn } = useAuth();
    const handleViewDetails = () => {
        if(isLoggedIn){
            navigate('/BrowseOpportunities');
        }
        else{
            navigate('/login');
        }
      };
  return (
    <article className={styles.eventCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={`Event: ${title}`} className={styles.eventImage} />
      </div>
      <h3 className={styles.eventTitle}>{title}</h3>
      <p className={styles.eventDate}>{date}</p>
      <p className={styles.eventLocation}>{location}</p>
      <a href="#" className={styles.viewDetails} onClick={handleViewDetails}>View Details</a>
    </article>
  );
};

export default EventCard;