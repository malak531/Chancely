import React, { useState } from 'react';
import styles from './BrowseOrganizations.module.css';
import OrganizationFilterSection from './OrganizationFilterSection.jsx';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter.jsx';
import AdminHeader from '../../AdminHeader/AdminHEader.jsx';
import { useNavigate } from 'react-router';


function BrowseOrganizations() {
  let navigate = useNavigate();

  // Define the state for organizations and search term
  const [organizations] = useState([
    {
      id:1,
      name: 'Aramco',
      location: 'Saudi Arabia',
      website: 'www.aramco.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnXDVW1Yz7NhfsVpJypVr8UrEycUs-BwdFA&s',
    },
    {
      id:2,
      name: 'Sabic',
      location: 'Saudi Arabia',
      website: 'www.sabic.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxCpkPJwuUNLFF9iShJerjzErTvIecghD0g&s',
    },
    // Add more organization objects as needed
  ]);

  // Define the state for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter organizations based on search term (name or location)
  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the delete button click (navigate to delete route)
  const handleDelete = (id) => {
    navigate(`/Delete/${id}`);
  };

  // Handle the details button click (navigate to the organization profile)
  const handleDetail = () => {
    navigate(`/OrganizationProfile`);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header section */}
      <header className={styles.header}>
        <AdminHeader />
      </header>

      {/* Search section with input field */}
      <div className={styles.searchContainer}>
        <h1>Search for an Organization</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
          />
          <button className={styles.searchButton}>
            {/* Search icon */}
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

      {/* Main content section */}
      <div className={styles.content}>
        {/* Filters sidebar */}
        <div className={styles.filterSection}>
          <OrganizationFilterSection />
        </div>

        {/* Organization cards display */}
        <section className={styles.cardsContainer}>
          {filteredOrganizations.length > 0 ? (
            // Render a card for each organization in the filtered list
            filteredOrganizations.map((org, index) => (
              <div key={index} className={styles.card}>
                <img src={org.logo} alt={`${org.name} logo`} className={styles.cardLogo} />
                <h2>{org.name}</h2>
                <p>{org.location}</p>
                <a href={`https://${org.website}`} target="_blank" rel="noopener noreferrer">{org.website}</a>
                <div className={styles.cardButtons}>
                  {/* Button to view organization details */}
                  <button className={styles.detailsButton} onClick={handleDetail}>Details</button>
                  {/* Button to delete the organization */}
                  <button className={styles.deleteButton} onClick={() => handleDelete(org.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No organizations found.</p>  // Message if no organizations match the search term
          )}
        </section>
      </div>

      {/* Footer section */}
      <div className={styles.footer}>
        <ContactInfoFooter />
      </div>
    </div>
  );
}

export default BrowseOrganizations;
