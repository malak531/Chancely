import React from 'react';
import styles from './DeleteOrg.module.css';

function DeleteOrg() {
  return (
    <div className={styles.deleteOrganizationAdmin}>
      <header className={styles.header}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14a49acdbe988ff958bcef9a7752e8f640bf2dad03cdd3bc8a4e4e9567c0cfcb?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2"
          className={styles.logo}
          alt="Logo"
        />
        <nav className={styles.nav}>
          <div>Pending Requests</div>
          <div>Create Event</div>
          <div>Organizations</div>
          <div>Opportunities</div>
          <div>Sign out</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fbbecafedfa3980bac004b31b08d888a97ccfd6a04db11cc11fb7cc99a38c18?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2"
            className={styles.userIcon}
            alt="User icon"
          />
        </nav>
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.deleteOrganization}>Delete Organization</h1>
        <section className={styles.organizationDetails}>
          <div className={styles.orgImageContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31cda728f6f2d2f53f9f3c842951a5a817fc524191f870b4ea7624a7aa4ec6e3?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
              className={styles.organizationImage}
              alt="Organization"
            />
          </div>
          <div className={styles.overview}>
            <textarea
              className={styles.overviewText}
              placeholder="Description of the organization"
              disabled
            ></textarea>
          </div>
        </section>
        <section className={styles.organizationInfo}>
          <div className={styles.infoField}>
            <label>Organization Name</label>
            <input type="text" placeholder="Organization name" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Website</label>
            <input type="text" placeholder="www.domain.com" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Location</label>
            <input type="text" placeholder="Country" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Size</label>
            <input type="text" placeholder="12k" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Type</label>
            <input type="text" placeholder="Type" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Total Events</label>
            <input type="text" placeholder="17" disabled />
          </div>
        </section>
        <button className={styles.deleteButton}>Delete</button>
      </main>
    </div>
  );
}

export default DeleteOrg;
