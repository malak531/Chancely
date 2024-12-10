import React, {useState, useEffect} from 'react';
import styles from './OrganizationOppCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';


const OrganizationOppCard = ({ id1 }) => {
    const navigate=useNavigate();
    
    const [events, setEvents] = useState([]);
    useEffect(() => {
      // Fetch opportunity data when component mounts
      const fetchEvents = async () => {
        try {
          const response = await fetch (`/api/organizationEvents/${id1}`);
          const data = await response.json();
          console.log(data);
          setEvents(data.events || []);
        } catch (error) {
          console.error('Error fetching organization:', error);
        }
      };
  
      fetchEvents();
    }, [id1]);
  
    if (!events) {
      return <div>Loading...</div>; // Display loading message until data is fetched
    }

    if (!events || events.length === 0) {
      return <div>No events available for this organization.</div>; // Handle empty events
    }
  
    
  return (
    <div className={styles.eventsContainer}>
    {events.map((event) => (
      <article key={event._id} className={styles.eventCard}>
        <div className={styles.imageWrapper}>
          <img
            src={event.Picture || "default-image-url"} // Use event's picture or fallback to a default image
            alt={`Event: ${event.OpportunityName}`}
            className={styles.eventImage}
          />
        </div>
        <h3 className={styles.eventTitle}>{event.OpportunityName}</h3>
        <p className={styles.eventDate}>{event.EventDate}</p>
        <p className={styles.eventLocation}>
          {event.City}, {event.Country}
        </p>
        <Link to={`/OppInfo/${event._id}`} className={styles.viewDetails}>
          View Details
        </Link>
      </article>
    ))}
  </div>
  );
};

export default OrganizationOppCard;