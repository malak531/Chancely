import React from 'react';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';
import Hero from './Hero';
import TrustedCompanies from '../AboutUsPage/TrustedCompanies';
import styles from './ChancelyHomePageNotLoggedIn.module.css'
import Services from '../AboutUsPage/Services';
const ChancelyHomePageNotLoggedIn = () => {
  return (
    <div className={styles.container}>

      <HeaderLoggedOut />

      <main>
        <Hero />
        <TrustedCompanies />
        <Services/>
      </main>
    </div>
  );
};

export default ChancelyHomePageNotLoggedIn;