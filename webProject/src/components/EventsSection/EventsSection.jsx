import React from 'react';
import styles from './EventsSection.module.css';

const events = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a950f284a2fdc55eefdd8660115948d99400ebcd4fa85a0fdd5e4d7983ccf41?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "Web Summit Qatar",
    date: "February 23-26, 2025",
    location: "Doha, Qatar",
    isPopular: true
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b21cc7bced2f8bb477fc216460a60eefe28b9897247212738534ecfdfae28ba5?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "LEAP",
    date: "February 9-12, 2025",
    location: "Riyadh, Saudi Arabia"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b20895a1b9a909e771c0500d4defbc44e1137e929b713857885a31f432d8603b?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "Summer ME Studies",
    date: "May 19 - Jun 16, 2025",
    location: "Amman, Jordan"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1147dc81864b0bca9ba3d9c525d6b90bfbc671a4281681f59c53cbac8c92a2d2?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "AUD SUMMER CAMP 2025",
    date: "TBA",
    location: "Dubai, UAE"
  }
];

const EventsSection = () => {
  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.sectionTitle}>CHECKOUT OUR NEW</h2>
      <h3 className={styles.subtitle}>Latest Posted Events</h3>
      <div className={styles.eventGrid}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            {event.isPopular && (
              <span className={styles.popularTag}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4d179dc4aa977e302e2de9b857dafa4fc14bc5e55e7e5b1d4771a95b3db8bf?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="" className={styles.popularIcon} />
                Popular
              </span>
            )}
            <h4 className={styles.eventTitle}>{event.title}</h4>
            <p className={styles.eventDate}>{event.date}</p>
            <p className={styles.eventLocation}>{event.location}</p>
            <a href="#" className={styles.viewDetails}>View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;