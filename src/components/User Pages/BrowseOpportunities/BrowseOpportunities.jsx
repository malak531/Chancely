import React, { useState, useEffect } from 'react';
import styles from './BrowseOpportunities.module.css';  // Import CSS styles for this component
import FilterSection from './FilterSection';  // Import the filter section component
import HeaderLoggedIn from '../../HeaderLoggedIn/HeaderLoggedInUser';  // Import the header for logged-in users
import CompanyBox from '../../CompanyBox/CompanyBox';  // Import the company box component to display opportunities
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter';  // Import the footer component
import Header from '../../EditEventOrganizer/Header';  // Import the header for event organizers
import { useAuth } from '../../AuthContext';  // Import the authentication context to access user roles
import AdminHeader from '../../AdminHeader/AdminHeader';


const BrowseOpportunities = () => {
    const { userRole } = useAuth();  // Get the user role from the authentication context

  // Initial state for opportunities list with mock data
  const [opportunities, setOpportunities] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');  // State to store the search term for filtering opportunities

  useEffect(() => {
    const fetchOpportunities = async () => {
        try {
            const response = await fetch("/api/opportunities:8080");
            const data = await response.json();
            setOpportunities(data);
        } catch (error) {
            console.error("Error fetching opportunities:", error);
        }
    };

    fetchOpportunities();
}, []);

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);  // Update the search term as the user types
  };

  // Filter opportunities based on the search term (matching title or location)
  const filteredOpportunities = opportunities.filter((opportunity) =>
    opportunity.OpportunityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.City.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.browseOpportunities}>
        
        {
  // Conditionally render the header based on the user role (organization, user, or admin)
  (
    userRole === "organization" ? 
  <Header/> :  // Render the organization header if the user role is "organization"
  userRole === "user" ? <HeaderLoggedIn /> : <AdminHeader/>  // Render the logged-in user header or the admin header based on the role
  ) 
}
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Explore Exciting Opportunities</h1>  {/* Page title */}
        <p className={styles.pageDescription}>Find the perfect event to boost your career or expand your knowledge.</p>  {/* Page description */}
        <div className={styles.contentWrapper}>
        <FilterSection/>  {/* Filter section component */}
          <section className={styles.opportunitiesSection}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                value={searchTerm}  // Bind the search term state to the input value
                onChange={handleSearch}  // Update search term on input change
              />
              <button className={styles.filterButton} aria-label="Filter">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7da80c2bbaedde6fe4e8e71ae33f4345b586c404970bc1c6cec49f8bceeb49b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.filterIcon} />  {/* Filter icon */}
              </button>
            </div>
            <div className={styles.opportunitiesGrid}>
              {/* Map through filtered opportunities and display them in CompanyBox components */}
              {filteredOpportunities.map(opportunity => (
                <CompanyBox key={opportunity._id} // Use MongoDB's `_id` as the key
                title={opportunity.OpportunityName}
                date={opportunity.EventDate}
                location={`${opportunity.City}, ${opportunity.Country}`}
                image={opportunity.Picture} />  // Pass opportunity data as props to the CompanyBox component
              ))}
            </div>
          </section>
        </div>
      </main>
      <ContactInfoFooter />  {/* Contact info footer */}
    </div>
  );
};

export default BrowseOpportunities;
