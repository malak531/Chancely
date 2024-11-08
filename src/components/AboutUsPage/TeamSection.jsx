import React from 'react';
import styles from './TeamSection.module.css';
import TeamMember from './TeamMember';
import TrustedCompanies from './TrustedCompanies';

const teamMembers = [
  { name: 'Zainab Alturaiki', role: 'Co-Founder', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/95ae57281c35814a04c78892d7b575480417cbf82255156cf893b37e78273d01?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { name: 'Noor Alqatari', role: 'Co-Founder', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e6767909c48886df160952de3bdbaad8e4d8bc58fe91ef0184f8c30610fe696?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { name: 'Maram Alghamdi', role: 'Co-Founder', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/638e21e05c423f15c9646f94442e0db38dafade390753e46606e17cd89a06a9b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { name: 'Malak Moataz', role: 'Co-Founder', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a06232c787183985a3021e99c92d0161d8bbfa0258e108bf5f7c8a1888c50ae?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' },
  { name: 'Salma Salem', role: 'Co-Founder', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c4025881683bdcaa5e6f301f2362291078ccdbb219b547c2bdb12d960a55062?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a' }
];

function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <TrustedCompanies />
      <div className={styles.content}>
        <header className={styles.sectionHeader}>
          <div className={styles.labelWrapper}>
            <div className={styles.iconLabel}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf586d82142084f3302c6c7836c465561fb7ad32aa4f462159c1f83f544abbfb?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.icon} />
            </div>
            <span className={styles.labelText}>meet us</span>
          </div>
          <h2 className={styles.sectionTitle}>OUR TEAM</h2>
        </header>
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;