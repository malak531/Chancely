import React from 'react';
import styles from './OpportunityDescription.module.css';
import SectionTitle from './SectionTitle';
import ActionButton from './ActionButton';

const OpportunityDescription = ({ description, criteria, links }) => {

     description='Web Summit Qatar 2025 is a major gathering of global tech leaders, entrepreneurs, and investors, creating a platform for discussions on the latest trends in technology and innovation. The event will feature high-profile speakers, including industry titans, and offer startups an invaluable opportunity to engage in competitions, masterclasses, and mentoring sessions.Participants can expect to network with key figures in the tech industry, explore new business opportunities, and gain insights from some of the most influential voices shaping the future of technology. The summit will also include exclusive events like the Night Summit, designed to facilitate connections in a more relaxed environment, making it a vibrant and dynamic experience for all attendees.'
     criteria="Open for everyone. No Criteria Required."
     links = [
        { href: "https://qatar.websummit.com/tickets/attendees/", text: "Register" },
        { href: "https://qatar.websummit.com", text: "Official Website" },
      ];
    return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section>
          <SectionTitle className={styles.sectionTitle}>Description</SectionTitle>
          <p className={styles.sectionDescription}>{description}</p>
        </section>
        
        <section>
          <SectionTitle className={styles.criteriaTitle}>Joining Criteria</SectionTitle>
          <p className={styles.criteriaDescription}>{criteria}</p>
        </section>
        
        <section>
          <SectionTitle className={styles.applyNowTitle}>Apply now</SectionTitle>
          <div className={styles.buttonContainer}>
            {links && links.map((link, index) => (
              <ActionButton key={index} href={link.href} text={link.text} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OpportunityDescription;
