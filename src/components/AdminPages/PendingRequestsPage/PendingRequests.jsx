import React from 'react';
import styles from './PendingRequests.css';

function PendingRequests() {
  return (
    <div className={styles.pendingOrganizationDetailsAdmin}>
      <div className={styles.div}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14a49acdbe988ff958bcef9a7752e8f640bf2dad03cdd3bc8a4e4e9567c0cfcb?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" className={styles.img} alt="Logo" />
        <div className={styles.div2}>
          <div className={styles.pendingRequests}>Pending Requests</div>
          <div className={styles.createEvent}>Create Event</div>
          <div className={styles.organizations}>Organizations</div>
          <div className={styles.opportunities}>Opportunities</div>
          <div className={styles.signOut}>Sign out</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fbbecafedfa3980bac004b31b08d888a97ccfd6a04db11cc11fb7cc99a38c18?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" className={styles.img2} alt="User icon" />
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.pendingOrganizationDetails}>Pending Organization Details</div>
        <div className={styles.div4}>
          <div className={styles.organizationImage}>Organization Image</div>
          <div className={styles.overview}>Overview</div>
        </div>
        <div className={styles.div5}>
          <div className={styles.div6}>
            <div className={styles.column}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08af4db3689185639556370f8f2d9217bc7d62d515b19c421344450a702dc54?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" className={styles.img3} alt="Organization" />
            </div>
            <div className={styles.column2}>
              <div className={styles.rectangle1}>Description of the organization</div>
            </div>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div8}>
            <div className={styles.column3}>
              <div className={styles.div9}>
                <div className={styles.organizationInformation}>Organization Information</div>
                <div className={styles.organizationName}>Organization Name</div>
                <div className={styles.rectangle12}>Organization name</div>
                <div className={styles.organizationLocation}>Organization Location</div>
                <div className={styles.rectangle13}>Country</div>
              </div>
            </div>
            <div className={styles.column4}>
              <div className={styles.div10}>
                <div className={styles.organizationWebsite}>Organization Website</div>
                <div className={styles.rectangle14}>www.domain.com</div>
                <div className={styles.organizationSize}>Organization Size</div>
                <div className={styles.rectangle15}>12k</div>
              </div>
            </div>
            <div className={styles.column5}>
              <div className={styles.div11}>
                <div className={styles.organizationType}>Organization Type</div>
                <div className={styles.rectangle16}>type</div>
                <div className={styles.totalEvents}>Total Events</div>
                <div className={styles.rectangle17}>17</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div12}>
          <button className={styles.approve}>Approve</button>
          <button className={styles.reject}>Reject</button>
        </div>
      </div>
    </div>
  );
}

export default PendingRequests;