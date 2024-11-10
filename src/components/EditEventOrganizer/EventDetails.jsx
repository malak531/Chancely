import React from 'react';
import styles from './EventDetails.module.css';

function EventDetails() {
  
  return (
    <>
    <section className={styles.eventDetails}>
      <h1 className={styles.title}>Edit Opportunity Details</h1>
      <h2 className={styles.subtitle}>Opportunity Details</h2>
      <div className={styles.imageSection}>
        <h3 className={styles.imageTitle}>Event Image</h3>
        <div className={styles.imageContainer}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a03e10883f54449947dcf2386f317a851fe5323502fe54117b3922758c64410?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="Event" className={styles.eventImage} />
          <div className={styles.imageChange}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb138e6bf097d311a23b2267f32d3a879ef4820ce8939a5bb845d2aa97e3fc4?placeholderIfAbsent=true&apiKey=ce557df0286d497daef1a15e3e8396b4" alt="" className={styles.changeIcon} />
            <span className={styles.changeText}>Click to change the picture</span>
          </div>
        </div>
      </div>
    </section>
    
        <h3 className={styles.fieldsTitle}>Event Fields of Interest</h3>
</>
  );
}

export default EventDetails;