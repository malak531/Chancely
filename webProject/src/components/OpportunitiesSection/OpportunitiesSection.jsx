import React from 'react';
import styles from './OpportunitiesSection.module.css';

const opportunities = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/58931c89846e68f4068cbc7347e19d1b659a75ce77227a4300a5169b1ed65c39?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "Conferences and Exhibitions",
    color: "#02a1f9"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c02490e512184e1c0d8e175ed374129bed74cbb485f2100798caae5f2983bbf2?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "Competitions and Awards",
    color: "#00d27a"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07769efeb8a05f742e68633dc33426147728353e0960db94c72ab343ffa079e5?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "Scholarships and Fellowships",
    color: "#02a1f9"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c8dbaa40b9a68b71aa3bd1953a1e687f7c3c009ec8c7f58b898cd1c8f31f65b?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1",
    title: "Summer Programs and Short courses",
    color: "#00d27a"
  }
];

const OpportunitiesSection = () => {
  return (
    <section className={styles.opportunitiesSection}>
      <h2 className={styles.sectionTitle}>Empowering You</h2>
      <h3 className={styles.subtitle}>What opportunities we offer</h3>
      <div className={styles.opportunitiesGrid}>
        {opportunities.map((opportunity, index) => (
          <div key={index} className={styles.opportunityCard} style={{color: opportunity.color}}>
            <img src={opportunity.icon} alt="" className={styles.icon} />
            <h4 className={styles.opportunityTitle}>{opportunity.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpportunitiesSection;