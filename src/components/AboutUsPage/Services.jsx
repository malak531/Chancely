import React from 'react';
import styles from './Services.module.css';
import ServiceCard from './ServiceCard';

const Services = () => {
  // Define the list of services with their respective icons and titles
  const services = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84bc6594439a2baf614125a996cccbb8a32a6a53afabc78ca1a3bf5480c23f6f?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", title: "Conferences & Exhibitions" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2850e34c42178e241195185c286dc343d735088e760b6b5c7e67be29b651c89b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", title: "Competitions & Awards" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cffbfc1e25a243eb20cb02197ec9f0226874e39b73355fd4130cc8cc84721981?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", title: "Scholarships & Fellowships" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7b6b2814e983476005840888fdd286e740855611b595e84253c6311a83438a3?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", title: "Summer Programs & Short courses" }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContent}>
        {/* Header for the services section */}
        <div className={styles.servicesHeader}>
          <div className={styles.labelWrapper}>
            <div className={styles.iconLabel}>
              {/* Icon for services section */}
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d1bf7b43c36a28c46a52bc6f173827e3e147639762130dda3aeb2057a122b1?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.icon} />
            </div>
            {/* Label for the section */}
            <span className={styles.label}>Services</span>
          </div>
          {/* Title of the section */}
          <h2 className={styles.servicesTitle}>What opportunities we offer</h2>
        </div>

        {/* Displaying the service cards for each service */}
        <div className={styles.serviceCards}>
          {services.map((service, index) => (
            // Mapping through the services array to create individual ServiceCards
            <ServiceCard key={index} icon={service.icon} title={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
