import React, { useState } from 'react';
import styles from './PendingOrganizationDetails.module.css';
import AdminHeader from '../../AdminHeader/AdminHEader';

const PendingOrganizationDetails = () => {
  // Initializing the organization data state
  const [organizationData] = useState({
    name: 'KFUPM',
    location: 'Saudi Arabia',
    website: 'www.kfupm.edu.sa',
    size: '12k',
    type: 'University',
    totalEvents: '17',
    description: "King Fahd University of Petroleum and Minerals is a nonprofit research university in Dhahran, Eastern Province, Saudi Arabia. Established in 1963 by King Saud bin Abdulalziz as the College of Petroleum and Minerals, it is ranked among the most prestigious academic institutions in Saudi Arabia.",
    imageUrl: '/Images/kfupm.png'
  });

  // Function to handle the approval action
  const handleApprove = () => {
    console.log('Organization approved');
  };

  // Function to handle the rejection action
  const handleReject = () => {
    console.log('Organization rejected');
  };

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
            <img src={organizationData.imageUrl} alt="Organization" className={styles.organizationImage} />
            <label className={styles.imageLabel}>Organization Image</label>
          </div>

          {/* Right Section: Overview */}
          <div className={styles.overviewSection}>
            <label className={styles.label}>Overview</label>
            {/* Displaying description in a disabled field */}
            <div className={`${styles.textarea} ${styles.disabledField}`}>{organizationData.description}</div>
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
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.name}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Organization Website</label>
              {/* Displaying organization website in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.website}</div>
            </div>
          </div>

          {/* Second Row: Location and Size */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Location</label>
              {/* Displaying organization location in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.location}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Organization Size</label>
              {/* Displaying organization size in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.size}</div>
            </div>
          </div>

          {/* Third Row: Type and Total Events */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Type</label>
              {/* Displaying organization type in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.type}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Total Events</label>
              {/* Displaying total events in a disabled field */}
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.totalEvents}</div>
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
