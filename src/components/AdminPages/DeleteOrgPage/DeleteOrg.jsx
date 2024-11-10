import React from 'react';
import styles from './DeleteOrg.module.css';
import AdminHeader from '../../AdminHeader/AdminHEader';

function DeleteOrg() {
  return (
    <div className={styles.deleteOrganizationAdmin}>
      <header className={styles.head}>
      <AdminHeader/>
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.deleteOrganization}>Delete Organization</h1>
        <section className={styles.organizationDetails}>
          <div className={styles.orgImageContainer} >
            <div className={styles.image} style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/Images/kfupm.png)`}} >
            </div>
    </div>
          <div className={styles.overview}>
            <textarea
              className={styles.overviewText}
              placeholder="
King Fahd University of Petroleum and Minerals is a nonprofit research university in Dhahran, Eastern Province, Saudi Arabia. Established in 1963 by King Saud bin Abdulalziz as the College of Petroleum and Minerals, it is ranked among the most prestigious academic institutions in Saudi Arabia."
              disabled
            ></textarea>
          </div>
        </section>
        <section className={styles.organizationInfo}>
          <div className={styles.infoField}>
            <label>Organization Name</label>
            <input type="text" placeholder="KFUPM " disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Website</label>
            <input type="text" placeholder="www.kfupm.edu.sa" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Location</label>
            <input type="text" placeholder="Saudi Arabia" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Size</label>
            <input type="text" placeholder="12k" disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Type</label>
            <input type="text" placeholder="University" disabled />
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
