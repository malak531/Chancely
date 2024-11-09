import React from 'react';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';
import Hero from './Hero';
import TrustedCompanies from '../AboutUsPage/TrustedCompanies';
import styles from './ChancelyHomePageNotLoggedIn.module.css'
import EventsSection from './EventsSection';
import RegisterSection from './RegisterSection';
import Services from '../AboutUsPage/Services';
import ContactInfoFooter from '../ContactInfoFooter/ContactInfoFooter';
 
const ChancelyHomePageNotLoggedIn = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/HomepageNotloggedIn.png)` }}
    >
      <HeaderLoggedOut />

      <main>
        <Hero />
        <TrustedCompanies />
        <Services/>
      </main>
      <main className={styles.eventsPage}>
      <EventsSection />
      <RegisterSection />
    </main>
    <ContactInfoFooter/>
    </div>
  );
};

export default ChancelyHomePageNotLoggedIn;