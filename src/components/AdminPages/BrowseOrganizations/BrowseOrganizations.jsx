import React, { useState, useEffect } from 'react';
import styles from './BrowseOrganizations.module.css';
import OrganizationFilterSection from './OrganizationFilterSection.jsx';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter.jsx';
import { useNavigate } from 'react-router';
import AdminHeader from '../../AdminHeader/AdminHeader.jsx';

function BrowseOrganizations() {
  let navigate = useNavigate();

  // Define the state for organizations and search term
  const [organizations, setOrganizations] = useState([]);

  // Define the state for search term
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOrganizations = async () => {
        try {
            const response = await fetch("/api/organizations", {
            });
            const data = await response.json();
            setOrganizations(data);
        } catch (error) {
            console.error("Error fetching organizations:", error);            
        }
    };

    fetchOrganizations();
}, []);

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);  // Update the search term as the user types
  };

  // Filter organizations based on search term (name or location)
  const filteredOrganizations = organizations.filter((org) =>
    org.organizationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the delete button click (navigate to delete route)
  const handleDelete = (id) => {
    navigate(`/Delete/${id}`);
  };

  // Handle the details button click (navigate to the organization profile)
  const handleDetail = (id) => {
    navigate(`/OrganizationProfile/${id}`);
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
            filteredOrganizations.map((organization) => (
              <div key={organization._id} className={styles.card}>
                <img src={organization.logo} alt={`${organization.organizationName} logo`} className={styles.cardLogo} />
                <h2>{organization.organizationName}</h2>
                <p>{organization.country}</p>
                <a href={organization.organizationURL} target="_blank" rel="noopener noreferrer">{organization.organizationURL}</a>
                <div className={styles.cardButtons}>
                  {/* Button to view organization details */}
                  <button className={styles.detailsButton} onClick={() => handleDetail(organization._id)}>Details</button>
                  {/* Button to delete the organization */}
                  <button className={styles.deleteButton} onClick={() => handleDelete(organization._id)}>Delete</button>
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
