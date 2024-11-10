import React, { useState } from 'react';
import styles from './BrowsePending.module.css';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter.jsx';
import AdminHeader from '../../AdminHeader/AdminHEader.jsx';

function BrowsePending() {
  // Initializing state for organizations data
  const [organizations] = useState([
    {
      name: 'King Fahd University of Petroleum and Minerals',
      location: 'Saudi Arabia',
      website: 'www.kfupm.com',
      logo: '/Images/kfupm.png',
    },
    {
      name: 'Sabic',
      location: 'Saudi Arabia',
      website: 'www.sabic.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxCpkPJwuUNLFF9iShJerjzErTvIecghD0g&s',
    },
  ]);

  // State for managing search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filter organizations based on the search term (name or location)
  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <AdminHeader />
      </header>

      {/* Search Section */}
      <div className={styles.searchContainer}>
        <h1>Search for an Organization</h1>
        <div className={styles.searchBar}>
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
            value={searchTerm}
            // Update searchTerm state as user types
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Search button with SVG icon */}
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
        {/* Organization Cards Section */}
        <section className={styles.cardsContainer}>
          {/* Check if there are filtered organizations to display */}
          {filteredOrganizations.length > 0 ? (
            // Loop through filtered organizations and display each as a card
            filteredOrganizations.map((org, index) => (
              <div key={index} className={styles.card}>
                {/* Display organization logo */}
                <img src={org.logo} alt={`${org.name} logo`} className={styles.cardLogo} />
                <h2>{org.name}</h2>
                <p>{org.location}</p>
                <a href={`https://${org.website}`} target="_blank" rel="noopener noreferrer">
                  {org.website}
                </a>
                {/* Buttons for details and other actions */}
                <div className={styles.cardButtons}>
                  <button className={styles.detailsButton}>Details</button>
                </div>
              </div>
            ))
          ) : (
            // Message shown if no organizations match the search term
            <p>No organizations found.</p>
          )}
        </section>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        <ContactInfoFooter />
      </div>
    </div>
  );
}

export default BrowsePending;
