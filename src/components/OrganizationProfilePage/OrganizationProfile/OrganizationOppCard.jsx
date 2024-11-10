import React from 'react';
import styles from './OrganizationOppCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';


const OrganizationOppCard = ({ image, title, date, location, isPopular }) => {
    const navigate=useNavigate();
    image= "https://cdn.builder.io/api/v1/image/assets/TEMP/9dcb55677e48d0699869861eb52c43ecc0f67505f072c86df146af707e1a2ec1?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a";
    title= "Web Summit Qatar";
    date="February 23-26, 2025";
    location= "Doha, Qatar";
    isPopular= true;
    
  return (
    <article className={styles.eventCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={`Event: ${title}`} className={styles.eventImage} />
      </div>
      <h3 className={styles.eventTitle}>{title}</h3>
      <p className={styles.eventDate}>{date}</p>
      <p className={styles.eventLocation}>{location}</p>
      <Link to="/OppInfo/1" className={styles.viewDetails} >View Details</Link>
      <Link to="/OppInfo/1" className={styles.viewDetails} >Edit Details</Link>
    </article>
  );
};

export default OrganizationOppCard;