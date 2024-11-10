import React, { useState } from 'react';
import styles from './BrowseOrganizations.module.css';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter';
import OrganizationFilterSection from './OrganizationFilterSection.jsx'

function OrganizationSearch() {
  const [organizations, setOrganizations] = useState([
    {
      name: 'Aramco',
      location: 'Saudi Arabia',
      website: 'www.aramco.com',
      logo: 'link_to_aramco_logo', // Replace with actual image links
    },
    {
      name: 'Sabic',
      location: 'Saudi Arabia',
      website: 'www.sabic.com',
      logo: 'link_to_sabic_logo',
    },
    // Add more organization objects as needed
  ]);

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <img src="link_to_logo" alt="Chancely Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <span>Pending Requests</span>
          <span>Create Event</span>
          <span>Organizations</span>
          <span>Opportunities</span>
          <span>Sign out</span>
        </nav>
      </header>

      {/* Search Section */}
      <div className={styles.searchContainer}>
        <h1>Search for an Organization</h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Filters Sidebar */}
        <OrganizationFilterSection/>

        {/* Organization Cards */}
        <div className={styles.cardsContainer}>
          {organizations.map((org, index) => (
            <div key={index} className={styles.card}>
              <img src={org.logo} alt={`${org.name} logo`} className={styles.cardLogo} />
              <h2>{org.name}</h2>
              <p>{org.location}</p>
              <a href={`https://${org.website}`} target="_blank" rel="noopener noreferrer">{org.website}</a>
              <div className={styles.cardButtons}>
                <button className={styles.detailsButton}>Details</button>
                <button className={styles.deleteButton}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button disabled>Previous</button>
        <span>1</span>
        <span>2</span>
        <button>Next</button>
      </div>

      {/* Footer */}
      <ContactInfoFooter/>
    </div>
  );
}

export default OrganizationSearch;
