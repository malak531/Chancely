import React, {useState, useEffect} from 'react';
import styles from './DeleteOrg.module.css';
import AdminHeader from '../../AdminHeader/AdminHeader';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

function DeleteOrg() {
  // Retrieve the 'id' from the URL params using useParams hook
  const { id } = useParams();

  // Sample data representing organizations (in a real scenario, this could come from an API)
  const [organization, setOrganization] = useState([]);


  // Find the organization that matches the 'id' parameter from the URL
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

  // Destructure the details of the organization from the found event

  // useNavigate hook to navigate programmatically
  let navigate = useNavigate();

  // Function to handle the delete action (navigates back to BrowseOpportunities page)
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this organization?');
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`/api/organization/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Organization deleted successfully.');
        navigate('/BrowseOpportunities'); // Navigate after successful deletion
      } else {
        console.error('Failed to delete the organization:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };
  

  return (
    <div className={styles.deleteOrganizationAdmin}>
      <header className={styles.head}>
        <AdminHeader />
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.deleteOrganization}>Delete Organization</h1>

        {/* Organization Details Section */}
        <section className={styles.organizationDetails}>
          <div className={styles.orgImageContainer}>
            {/* Displaying the organization's image as background */}
            <div className={styles.image} style={{ backgroundImage: `url(${organization.logo})` }}></div>
          </div>
          <div className={styles.overview}>
            {/* Displaying the description in a disabled textarea */}
            <textarea
              className={styles.overviewText}
              placeholder={organization.overview}
              disabled
            ></textarea>
          </div>
        </section>

        {/* Organization Info Section */}
        <section className={styles.organizationInfo}>
          <div className={styles.infoField}>
            <label>Organization Name</label>
            {/* Displaying organization name in a disabled input field */}
            <input type="text" placeholder={organization.organizationName} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Website</label>
            {/* Displaying organization website in a disabled input field */}
            <input type="text" placeholder={organization.organizationURL} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Location</label>
            {/* Displaying organization location in a disabled input field */}
            <input type="text" placeholder={organization.country} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Size</label>
            {/* Displaying organization size in a disabled input field */}
            <input type="text" placeholder="10k" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Type</label>
            {/* Displaying organization type in a disabled input field */}
            <input type="text" placeholder={organization.industry} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Total Events</label>
            {/* Displaying total events in a disabled input field */}
            <input type="text" placeholder="5" disabled />
          </div>
        </section>

        {/* Delete button to initiate deletion */}
        <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
      </main>
    </div>
  );
}

export default DeleteOrg;
