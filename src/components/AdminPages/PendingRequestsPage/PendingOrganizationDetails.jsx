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
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/31cda728f6f2d2f53f9f3c842951a5a817fc524191f870b4ea7624a7aa4ec6e3?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganizationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

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
              <textarea
                name="description"
                value={organizationData.description}
                onChange={handleInputChange}
                className={styles.rectangle1}
                rows="5"
              />
            </div>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div8}>
            <div className={styles.column3}>
              <div className={styles.div9}>
                <h2 className={styles.organizationInformation}>Organization Information</h2>
                <label className={styles.organizationName}>Organization Name</label>
                <input
                  type="text"
                  name="name"
                  value={organizationData.name}
                  onChange={handleInputChange}
                  className={styles.rectangle12}
                />
                <label className={styles.organizationLocation}>Organization Location</label>
                <input
                  type="text"
                  name="location"
                  value={organizationData.location}
                  onChange={handleInputChange}
                  className={styles.rectangle13}
                />
              </div>
            </div>
            <div className={styles.column4}>
              <div className={styles.div10}>
                <label className={styles.organizationWebsite}>Organization Website</label>
                <input
                  type="text"
                  name="website"
                  value={organizationData.website}
                  onChange={handleInputChange}
                  className={styles.rectangle14}
                />
                <label className={styles.organizationSize}>Organization Size</label>
                <input
                  type="text"
                  name="size"
                  value={organizationData.size}
                  onChange={handleInputChange}
                  className={styles.rectangle15}
                />
              </div>
            </div>
            <div className={styles.column5}>
              <div className={styles.div11}>
                <label className={styles.organizationType}>Organization Type</label>
                <input
                  type="text"
                  name="type"
                  value={organizationData.type}
                  onChange={handleInputChange}
                  className={styles.rectangle16}
                />
                <label className={styles.totalEvents}>Total Events</label>
                <input
                  type="text"
                  name="totalEvents"
                  value={organizationData.totalEvents}
                  onChange={handleInputChange}
                  className={styles.rectangle17}
                />
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
