import React, { useState } from 'react';
import styles from './BrowseOrganizations.module.css';
import OrganizationFilterSection from './OrganizationFilterSection.jsx';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter.jsx';

function BrowseOrganizations() {
  const [organizations, setOrganizations] = useState([
    {
      name: 'Aramco',
      location: 'Saudi Arabia',
      website: 'www.aramco.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnXDVW1Yz7NhfsVpJypVr8UrEycUs-BwdFA&s', // Replace with actual image links
    },
    {
      name: 'Sabic',
      location: 'Saudi Arabia',
      website: 'www.sabic.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxCpkPJwuUNLFF9iShJerjzErTvIecghD0g&s',
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
          <button className={styles.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.searchIcon}
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Filters Sidebar */}
        <OrganizationFilterSection />

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
        <div>
          <ContactInfoFooter />
        </div>
    </div>
  );
}

export default OrganizationSearch;


