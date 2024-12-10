import React from 'react';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';
import Hero from './Hero';
import TrustedCompanies from '../AboutUsPage/TrustedCompanies';
import styles from './ChancelyHomePageNotLoggedIn.module.css'
import EventsSection from './EventsSection';
import RegisterSection from './RegisterSection';
import Services from '../AboutUsPage/Services';
import ContactInfoFooter from '../ContactInfoFooter/ContactInfoFooter';
import { useAuth } from '../AuthContext';
import HeaderLoggedIn from '../HeaderLoggedIn/HeaderLoggedInUser';
import Header from '../EditEventOrganizer/Header';
import AdminHeader from '../AdminHeader/AdminHeader';

const ChancelyHomePageNotLoggedIn = () => {
  const { isLoggedIn } = useAuth();
  const { userRole } = useAuth();
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/HomepageNotloggedIn.png)` }}
    >
{
  isLoggedIn ? (
    userRole === "organization" ? (
  <Header/>
    ) : userRole === "user" ? (
      <HeaderLoggedIn />
    ) : <AdminHeader/>) : (
    <HeaderLoggedOut />
  )
}
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