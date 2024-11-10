import React from 'react';
import HeaderLoggedIn from '../HeaderLoggedIn/HeaderLoggedInUser';
import TopContent from './TopContent';
import styles from './AboutUs.module.css'
import SectionHeader from './SectionHeader';
import MissionVision from './MissionVision';
import Services from './Services';
import WorldMap from './WorldMap';
import LabeledTitle from './LabeledTitle';
import StorySection from './StorySection';
import ContactInfoFooter from '../ContactInfoFooter/ContactInfoFooter';
import TeamSection from './TeamSection';
import { useAuth } from '../AuthContext';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';
import Header from '../EditEventOrganizer/Header';
import AdminHeader from '../AdminHeader/AdminHEader';
const AboutUs = () => {
    const { isLoggedIn } = useAuth();
    const{userRole} = useAuth();
  return (
    <div className={styles.content}>
    <header>
{
  isLoggedIn ? (
    userRole === "organization" ? (
  <Header/>
    ) : userRole === "user" ? (
      <HeaderLoggedIn />
    ) : <AdminHeader/> // You can add more conditions if needed
  ) : (
    <HeaderLoggedOut />
  )
}

    </header>
    <div className={styles.homePage}>
      <TopContent />
    </div>
    <main className={styles.aboutUsContainer}>
      <SectionHeader
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c1f54a6e6c1bbb18c120b80e8153b41612333594309c6365d3bf5410b686aa?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
        label="About us"
        title="OUR MISSION"
        description="Our mission is simple: to provide a centralized platform that connects individuals with educational, professional, and networking opportunities that drive personal and professional growth. We aim to make it easy for users to discover relevant events such as hackathons, workshops, conferences, and more, while also empowering organizations to reach a wider audience with their offerings."
      />
      <MissionVision
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cf586d82142084f3302c6c7836c465561fb7ad32aa4f462159c1f83f544abbfb?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
        label="About us"
        title="OUR VISION"
        description="We envision a Middle East where education and professional opportunities are accessible to all, regardless of geographic or socio-economic barriers. By fostering connections between organizations and individuals, we hope to inspire a future of innovation, collaboration, and progress."
      />
      <Services />
    </main>
    <section className={styles.aboutUsSection}>
      <div className={styles.contentWrapper}>
        <LabeledTitle
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed8bce6812655b026193474e87bbb1bb1765a8ca07963c8b3f03c581ac11148?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
          labelText="About us"
          titleText="NO MATTER WHERE YOU ARE, WE ARE HERE FOR YOU"
        />
      </div>
      <div className={styles.mapContainer}>
        <WorldMap />
        <StorySection />
      </div>
    </section>
    <section><TeamSection/></section>
    
    <ContactInfoFooter/>
    </div>

    
  );
};

export default AboutUs;