import React, { useState, useEffect } from 'react';
import styles from './PendingOrganizationDetails.module.css';
import AdminHeader from '../../AdminHeader/AdminHeader';

const PendingOrganizationDetails = () => {
  // Initializing the organization data state
  const [organizations, setOrganizations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const fetchOrganizations = async () => {
        try {
            const response = await fetch("/api/organizationsPending", {
            });
            const data = await response.json();
            setOrganizations(data);
        } catch (error) {
            console.error("Error fetching organizations:", error);            
        }
    };

    fetchOrganizations();
}, []);
  
  // Function to handle the approval action
  const handleApprove = async () => {
    const approvedOrganization = organizations[currentIndex];

    // Send the updated organization with pending set to false
    try {
      const response = await fetch(`/api/organizations/${approvedOrganization._id}`, {
        method: 'POST',  // or 'POST' if that's how your API is set up
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...approvedOrganization,
          pending: false,  // Mark the organization as approved
        }),
      });

      if (response.ok) {
        console.log('Organization approved and status updated');
        // Move to the next organization after approval
        if (currentIndex < organizations.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        console.error('Error updating organization status');
      }
    } catch (error) {
      console.error('Error approving organization:', error);
    }
  };


  // Function to handle the rejection action
  const handleReject = () => {
    console.log('Organization rejected');
    if (currentIndex < organizations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const organizationData = organizations[currentIndex] || {};
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <header className={styles.head}>
        <AdminHeader />
      </header>

      {/* Main Content Section */}
      <div className={styles.centeredBox}>
        {/* Page Title */}
        <h1 className={styles.title}>Pending Organization Details</h1>

        <div className={styles.mainContent}>
          {/* Left Section: Organization Image */}
          <div className={styles.imageSection}>
            <img src={organizationData.logo} alt="Organization" className={styles.organizationImage} />
            <label className={styles.imageLabel}>Organization Image</label>
          </div>

          {/* Right Section: Overview */}
          <div className={styles.overviewSection}>
            <label className={styles.label}>Overview</label>
            {/* Displaying description in a disabled field */}
            <div className={`${styles.textarea} ${styles.disabledField}`}>{organizationData.overview}</div>
          </div>
        </div>

        {/* Organization Information Section */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Organization Information</h2>

          {/* First Row: Name and Website */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Name</label>
              {/* Displaying organization name in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.organizationName}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Organization Website</label>
              {/* Displaying organization website in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.organizationUrl}</div>
            </div>
          </div>

          {/* Second Row: Location and Size */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Location</label>
              {/* Displaying organization location in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.country}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Organization Size</label>
              {/* Displaying organization size in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>10k</div>
            </div>
          </div>

          {/* Third Row: Type and Total Events */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Type</label>
              {/* Displaying organization type in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.organizationType}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Total Events</label>
              {/* Displaying total events in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>5</div>
            </div>
          </div>
        </div>

        {/* Approve and Reject Buttons */}
        <div className={styles.buttonGroup}>
          <button onClick={handleApprove} className={styles.approveButton}>Approve</button>
          <button onClick={handleReject} className={styles.rejectButton}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default PendingOrganizationDetails;
