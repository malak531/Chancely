import React from 'react';
import EventCard from './EventCard';
import styles from './EventsSection.module.css';

let eventsData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dcb55677e48d0699869861eb52c43ecc0f67505f072c86df146af707e1a2ec1?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
    title: "Web Summit Qatar",
    date: "February 23-26, 2025",
    location: "Doha, Qatar",
    isPopular: true
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/58bd1b7cf8701688386e475e2bac0a63d2a3681c500c40a0c7124944a5ca0e3f?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
    title: "LEAP",
    date: "February 9-12, 2025",
    location: "Riyadh, Saudi Arabia",
    isPopular: false
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0432cf2bd8c6998bec74e885db430b7f0f0c3785367a0fe5dfc8bd1986cfb93b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
    title: "Summer ME Studies",
    date: "May 19 - Jun 16, 2025",
    location: "Amman, Jordan",
    isPopular: false
  }
];

const EventsSection = () => {
  return (
    <section className={styles.eventsSection}>
      <div className={styles.container}>
        <p className={styles.sectionSubtitle}>CHECKOUT OUR NEW</p>
        <h2 className={styles.sectionTitle}>Latest Posted Events</h2>
        <div className={styles.eventsGrid}>
          {eventsData.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;