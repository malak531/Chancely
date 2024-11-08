import React from 'react';
import styles from './OrganizationProfile.module.css';

const NavItem = ({ text, isActive }) => {
  return (
    <button className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}>
      {text}
    </button>
  );
};

const OpportunityCard = ({ title, date, location, attendees, image }) => {
  return (
    <article className={styles.opportunityCard}>
      <img src={image} alt={title} className={styles.opportunityImage} />
      <div className={styles.opportunityInfo}>
        <div className={styles.opportunityDetails}>
          <h3 className={styles.opportunityTitle}>{title}</h3>
          <time className={styles.opportunityDate}>{date}</time>
        </div>
        <div className={styles.opportunityAttendees}>
          <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/97d128094b664ac9be4f8887290954bbc4662958237be8a2d1578d2967b3017a?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="Attendees" className={styles.attendeesIcon} />
          <span>{attendees}</span>
        </div>
      </div>
      <p className={styles.opportunityLocation}>{location}</p>
      <div className={styles.opportunityActions}>
        <button className={styles.actionButton}>View Details</button>
        <button className={styles.actionButton}>Edit</button>
      </div>
    </article>
  );
};

const OrganizationProfile = () => {
  const navItems = [
    { text: 'Home', isActive: true },
    { text: 'Explore', isActive: false },
    { text: 'About us', isActive: false },
    { text: 'Sign out', isActive: false },
  ];

  const opportunities = [
    {
      title: 'Web Summit Qatar',
      date: 'February 23-26, 2025',
      location: 'Doha, Qatar',
      attendees: 60,
      image: 'https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/f9c64e4959b3c25fef8442adc292a38f3cbd1380b52494dbcb9a6a884bfaca75?apiKey=05d1d044449441c1b326e0ad9c21dcf1&',
    },
    {
      title: 'LEAP',
      date: 'February 9-12, 2025',
      location: 'Riyadh, Saudi Arabia',
      attendees: 110,
      image: 'https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/56f998ccbd92bc9aaf8dd7e116612de10f777e9021f59c5c86078bba195cefbb?apiKey=05d1d044449441c1b326e0ad9c21dcf1&',
    },
    {
      title: 'BlackHat 2024',
      date: 'November 26-28, 2024',
      location: 'Riyadh, Saudi Arabia',
      attendees: 83,
      image: 'https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/9d91160ebcf81bf8e8a1db71db336de64fc79914eace56c536b5bad407dafe49?apiKey=05d1d044449441c1b326e0ad9c21dcf1&',
    },
  ];

  const interestTags = [
    'Information Technology',
    'Engineering',
    'Business & Management',
    'Chemistry',
    'Artificial Intelligence',
    'Physics',
  ];

  return (
    <main className={styles.organizationProfile}>
      <header className={styles.header}>
        <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/14a49acdbe988ff958bcef9a7752e8f640bf2dad03cdd3bc8a4e4e9567c0cfcb?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="Organization Logo" className={styles.logo} />
        <nav className={styles.navContainer}>
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} isActive={item.isActive} />
          ))}
          <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/3d6de7d767d4aabea1478af1c0668e49f79d1db7bb4219de7a29e350e31b2af1?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="User Icon" className={styles.userIcon} />
        </nav>
      </header>
      <section className={styles.mainContent}>
        <div className={styles.profileHeader}>
          <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/80253d05671816f31a5201bcaa88c6e8860998b68062a74620e7482f646d30a4?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="Cover" className={styles.coverImage} />
          <div className={styles.profileLogo}>
            <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/169d94c56d8fe3e8b53a9672e5f6dcb7dc1875a725a90fc909a5b20d636e3a8d?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="Profile Logo" className={styles.logoImage} />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.organizationName}>King Fahd University of Petroleum & Minerals</h1>
          <button className={styles.editProfileBtn}>Edit Profile</button>
        </div>
        <div className={styles.overviewSection}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewMain}>
              <div className={styles.overviewText}>
                <h2>Overview</h2>
                <p className={styles.description}>
                  King Fahd University of Petroleum & Minerals (KFUPM) is a leading educational institution located in the heart of Dhahran, Saudi Arabia. Renowned for its world-class programs in engineering, science, and business, KFUPM empowers both undergraduate and graduate students to dream big and achieve their ambitions. The university is dedicated to fostering innovation, research, and leadership skills, preparing its students to thrive in a rapidly evolving global landscape. Through this platform, KFUPM offers a range of opportunities, workshops, and seminars designed to connect students, alumni, and professionals with enriching experiences and valuable networks.
                </p>
                <h3 className={styles.fieldsOfInterest}>Fields of Interest</h3>
              </div>
            </div>
            <aside className={styles.sidebarColumn}>
              <div className={styles.sidebar}>
                <h3 className={styles.sidebarTitle}>About</h3>
                <div className={styles.sidebarItem}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/7170454516998f89084ff6bd3d49b67dba4d5aa4829ff7fec2b45943f966e55b?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.sidebarIcon} />
                  <span className={styles.sidebarText}>Higher Education</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.sidebarSubItem}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/e9b6b152edb267a589fc5de77611782d1f01f0d034c31aa92c642d4a3169f5fb?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.sidebarSubIcon} />
                  <span className={styles.sidebarSubText}>Dhahran, Saudi Arabia</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.sidebarLink}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/a785e68d94d6a58f910e43ae910e4b44ab477f60ed6a1ddd118de00b9d639efa?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.linkIcon} />
                  <a href="https://www.kfupm.edu.sa" className={styles.linkText}>www.kfupm.edu.sa</a>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/c6991b3b2d6d9e7b8e4b99e6f4d2ee72fca25016109cecbea7c21ca6cdb9d65d?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="University Campus" className={styles.sidebarImage} />
              </div>
            </aside>
          </div>
        </div>
        <div className={styles.interestTags}>
          {interestTags.map((tag, index) => (
            <span key={index} className={styles.interestTag}>{tag}</span>
          ))}
        </div>
        <section className={styles.opportunitiesSection}>
          <h2>This Organization's Opportunities</h2>
          <div className={styles.opportunitiesGrid}>
            <div className={styles.opportunitiesRow}>
              {opportunities.map((opportunity, index) => (
                <OpportunityCard key={index} {...opportunity} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default OrganizationProfile;