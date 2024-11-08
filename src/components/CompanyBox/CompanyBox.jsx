//company box 
import React from "react";
import styles from "./companyBox.module.css";
import BtnSm from '../BtnSm/BtnSm';

const CompanyBox = ({ title, date, location, image }) => {
    return (
        <article className={styles.opportunityCard}>
      <img src={image} alt={title} className={styles.opportunityImage} />
      <div className={styles.opportunityInfo}>
        <h3 className={styles.opportunityTitle}>{title}</h3>
        <p className={styles.opportunityDate}>{date}</p>
        <p className={styles.opportunityLocation}>{location}</p>
      </div>
      <button className={styles.viewDetailsButton}>View Details</button>
    </article>
    );
};

export default CompanyBox;

