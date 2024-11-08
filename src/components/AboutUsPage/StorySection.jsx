import React from 'react';
import styles from './StorySection.module.css';
import LabeledTitle from './LabeledTitle';

function StorySection() {
  return (
    <section className={styles.storySection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5545e259349897bc737ad9d829831bbb38f1d3b8843030130f505b495184089b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" 
            alt="Illustration representing our story" 
            className={styles.storyImage} 
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <LabeledTitle
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ddd54293b862095e69b05c017249d6dfe0614d09f7465a979403a083d7bb1ca4?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
              labelText="our story"
              titleText="HOW IT ALL BEGAN"
            />
            <p className={styles.description}>
              As students and professionals, we often missed out on valuable events and opportunities because we'd only hear about them after they had already happened. We noticed that while other regions had social media platforms dedicated to sharing these opportunities, the Middle East lacked such a resource. That's why we created Chancely—a platform to ensure that no one in our region misses the chance to connect, learn, and grow through educational and professional events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;