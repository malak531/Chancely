import React, {useState, useEffect} from 'react';
import styles from './OrganizationProfile.module.css';
import NavItem from './NavItem';
import OpportunityCard from './OpportunityCard';
import Header from '../../EditEventOrganizer/Header';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter';
import EventsSection from '../../ChancelyHomepageNotLoggedIn/EventsSection';
import OrganizationOppCard from './OrganizationOppCard';
import AdminHeader from '../../AdminHeader/AdminHeader';
import { useAuth } from '../../AuthContext';
import { useParams } from 'react-router-dom';


const OrganizationProfile = () => {
  const {userRole}=useAuth;
  const { id } = useParams();
  const [organization, setOrganization] = useState(null);
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

  useEffect(() => {
    // Fetch opportunity data when component mounts
    const fetchOrganization = async () => {
      try {
        const response = await fetch (`/api/organization/${id}`);
        const data = await response.json();
        console.log(data);
        setOrganization(data);
      } catch (error) {
        console.error('Error fetching organization:', error);
      }
    };

    fetchOrganization();
  }, [id]);

  if (!organization) {
    return <div>Loading...</div>; // Display loading message until data is fetched
  }

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
    {userRole === "organization" ? 
  <Header/>: <AdminHeader/>}
      <section className={styles.mainContent}>
        <div className={styles.profileHeader}>
          <img src={organization.backgroundImage} alt="Cover" className={styles.coverImage} />
          <div className={styles.profileLogo}>
            <img src={organization.logo} alt="Profile Logo" className={styles.logoImage} />
          </div>
        </div>

        <div className={styles.profileInfo}>
          <h1 className={styles.organizationName}>{organization.organizationName}</h1>
        </div>

        <div className={styles.overviewSection}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewMain}>
              <div className={styles.overviewText}>
                <h2>Overview</h2>
                <p className={styles.description}>
                  {organization.overview}
                </p>
                <h3 className={styles.fieldsOfInterest}>Fields of Interest</h3>
              </div>
            </div>
            <aside className={styles.sidebarColumn}>
              <div className={styles.sidebar}>
                <h3 className={styles.sidebarTitle}>About</h3>
                <div className={styles.sidebarItem}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/7170454516998f89084ff6bd3d49b67dba4d5aa4829ff7fec2b45943f966e55b?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.sidebarIcon} />
                  <span className={styles.sidebarText}>{organization.industry}</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.sidebarSubItem}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/e9b6b152edb267a589fc5de77611782d1f01f0d034c31aa92c642d4a3169f5fb?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.sidebarSubIcon} />
                  <span className={styles.sidebarSubText}>{organization.country}</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.sidebarLink}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/a785e68d94d6a58f910e43ae910e4b44ab477f60ed6a1ddd118de00b9d639efa?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.linkIcon} />
                  <a href={organization.organizationURL} className={styles.linkText}>{organization.organizationURL}</a>
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
          <OrganizationOppCard id1 = {id}/>
            
        </section>
      </section>
      <ContactInfoFooter/>
    </main>
  );
};

export default OrganizationProfile;