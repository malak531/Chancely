import React, { useState } from 'react';
import styles from './PendingOrganizationDetails.module.css';
import AdminHeader from '../../AdminHeader/AdminHEader';
const PendingOrganizationDetails = () => {
  const [organizationData] = useState({
    name: 'Organization name',
    location: 'Country',
    website: 'www.domain.com',
    size: '12k',
    type: 'type',
    totalEvents: '17',
    description: 'Description of the organization',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/31cda728f6f2d2f53f9f3c842951a5a817fc524191f870b4ea7624a7aa4ec6e3?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
  });

  const handleApprove = () => {
    console.log('Organization approved');
  };

  const handleReject = () => {
    console.log('Organization rejected');
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.head}>
      <AdminHeader />
      </header>
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
            <div className={`${styles.textarea} ${styles.disabledField}`}>{organizationData.description}</div>
          </div>
        </div>

        {/* Organization Information */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Organization Information</h2>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Name</label>
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.name}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Organization Website</label>
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.website}</div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Location</label>
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.location}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Organization Size</label>
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.size}</div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Organization Type</label>
              <div className={`${styles.input} ${styles.disabledField}`}>{organizationData.type}</div>
            </div>
            <div className={styles.formGroup}>
              <label>Total Events</label>
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
