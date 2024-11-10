import React, { useState } from 'react';
import styles from './BrowseOpportunities.module.css';
import FilterSection from './FilterSection';
import HeaderLoggedIn from '../../HeaderLoggedIn/HeaderLoggedInUser';
import CompanyBox from '../../CompanyBox/CompanyBox';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter';
import Header from '../../EditEventOrganizer/Header';
import { useAuth } from '../../AuthContext';

const BrowseOpportunities = () => {
    const{userRole} = useAuth();

  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      title: 'Web Summit Qatar',
      date: 'February 23-26, 2025',
      location: 'Doha, Qatar',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/31cda728f6f2d2f53f9f3c842951a5a817fc524191f870b4ea7624a7aa4ec6e3?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
    },
    {
      id: 2,
      title: 'LEAP',
      date: 'February 9-12, 2025',
      location: 'Riyadh, Saudi Arabia',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1afdc7b049fac86295c8b61f984d5c9f4f0b5f218d08c6acc47a5c370dc0511a?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
    },
    {
      id: 3,
      title: 'BlackHat 2024',
      date: 'November 26-28, 2024',
      location: 'Riyadh, Saudi Arabia',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/017ff25d7b72904229587f1a38e1d984e30975c7df25d2731eb21e6e33e86494?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
    },
    {
      id: 4,
      title: 'Capacity Middle East 2025',
      date: 'February 4-6, 2025',
      location: 'Dubai, UAE',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed2708ddd03181671d20c56b2d23fef902743912aa38a29147b78e351766e457?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
    },
    {
      id: 5,
      title: 'Global Student Research Conference',
      date: 'February 15-20, 2025',
      location: 'Dhahran, Saudi Arabia',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2786ae9b7e46d1f801cb271b5ee87730d8e6eec19e9e807b3b4fcd069c052074?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
    },
    {
      id: 6,
      title: 'Seamless',
      date: 'May 20-25, 2025',
      location: 'Dubai, UAE',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d089f19f09f254bf7543404e11d2b0fd7836cab3406ec3af821990b941cf09c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOpportunities = opportunities.filter((opportunity) =>
    opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.browseOpportunities}>
        
        {
  (
    userRole === "organization" ? 
  <Header/> :
      <HeaderLoggedIn />
  ) 
}
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Explore Exciting Opportunities</h1>
        <p className={styles.pageDescription}>Find the perfect event to boost your career or expand your knowledge.</p>
        <div className={styles.contentWrapper}>
        <FilterSection/>
          <section className={styles.opportunitiesSection}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className={styles.filterButton} aria-label="Filter">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7da80c2bbaedde6fe4e8e71ae33f4345b586c404970bc1c6cec49f8bceeb49b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.filterIcon} />
              </button>
            </div>
            <div className={styles.opportunitiesGrid}>
              {filteredOpportunities.map(opportunity => (
                <CompanyBox key={opportunity.id} {...opportunity} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <ContactInfoFooter />
    </div>
  );
};

export default BrowseOpportunities;
