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
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d107b108e79f5debe7eeb402662b2c6f6d29bba8e9f0f61ec4503c6a64385a4c?apiKey=218bd92b074948a89f9ff4d5fadeb9e2&'
  });

  const handleApprove = () => {
    console.log('Organization approved');
  };

  const handleReject = () => {
    console.log('Organization rejected');
  };

  return (
    <div className={styles.pendingOrganizationDetailsAdmin}>
      <Header />
      <div className={styles.div3}>
        <h1 className={styles.pendingOrganizationDetails}>Pending Organization Details</h1>
        <div className={styles.div4}>
          <div className={styles.organizationImage}>Organization Image</div>
          <div className={styles.overview}>Overview</div>
        </div>
        <div className={styles.div5}>
          <div className={styles.div6}>
            <div className={styles.column}>
              <img loading="lazy" src={organizationData.imageUrl} alt="Organization" className={styles.img3} />
            </div>
            <div className={styles.column2}>
              <div className={styles.rectangle1}>{organizationData.description}</div>
            </div>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div8}>
            <div className={styles.column3}>
              <div className={styles.div9}>
                <h2 className={styles.organizationInformation}>Organization Information</h2>
                <label className={styles.organizationName}>Organization Name</label>
                <div className={styles.rectangle12}>{organizationData.name}</div>
                <label className={styles.organizationLocation}>Organization Location</label>
                <div className={styles.rectangle13}>{organizationData.location}</div>
              </div>
            </div>
            <div className={styles.column4}>
              <div className={styles.div10}>
                <label className={styles.organizationWebsite}>Organization Website</label>
                <div className={styles.rectangle14}>{organizationData.website}</div>
                <label className={styles.organizationSize}>Organization Size</label>
                <div className={styles.rectangle15}>{organizationData.size}</div>
              </div>
            </div>
            <div className={styles.column5}>
              <div className={styles.div11}>
                <label className={styles.organizationType}>Organization Type</label>
                <div className={styles.rectangle16}>{organizationData.type}</div>
                <label className={styles.totalEvents}>Total Events</label>
                <div className={styles.rectangle17}>{organizationData.totalEvents}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div12}>
          <button onClick={handleApprove} className={styles.approve}>Approve</button>
          <button onClick={handleReject} className={styles.reject}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default PendingOrganizationDetails;