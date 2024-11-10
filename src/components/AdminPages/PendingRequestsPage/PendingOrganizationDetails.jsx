import React, { useState } from 'react';
import styles from './PendingOrganizationDetails.module.css';
import Header from './Header';

const PendingOrganizationDetails = () => {
  const [organizationData, setOrganizationData] = useState({
    name: 'Organization name',
    location: 'Country',
    website: 'www.domain.com',
    size: '12k',
    type: 'type',
    totalEvents: '17',
    description: 'Description of the organization',
    imageUrl: 'https://via.placeholder.com/150'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganizationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleApprove = () => {
    console.log('Organization approved');
  };

  const handleReject = () => {
    console.log('Organization rejected');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.centeredBox}>
        <h1 className={styles.title}>Pending Organization Details</h1>

        <div className={styles.mainContent}>
          {/* Left: Organization Image */}
          <div className={styles.imageSection}>
            <img src={organizationData.imageUrl} alt="Organization" className={styles.organizationImage} />
            <label className={styles.imageLabel}>Organization Image</label>
          </div>

          {/* Right: Overview */}
          <div className={styles.overviewSection}>
            <label className={styles.label}>Overview</label>
            <textarea
              name="description"
              value={organizationData.description}
              onChange={handleInputChange}
              className={styles.textarea}
            />
          </div>
        </div>

        {/* Organization Information */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Organization Information</h2>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Name</label>
              <input
                type="text"
                name="name"
                value={organizationData.name}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Website</label>
              <input
                type="text"
                name="website"
                value={organizationData.website}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Location</label>
              <input
                type="text"
                name="location"
                value={organizationData.location}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Size</label>
              <input
                type="text"
                name="size"
                value={organizationData.size}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Type</label>
              <input
                type="text"
                name="type"
                value={organizationData.type}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Total Events</label>
              <input
                type="text"
                name="totalEvents"
                value={organizationData.totalEvents}
                onChange={handleInputChange}
                className={styles.input}
              />
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
