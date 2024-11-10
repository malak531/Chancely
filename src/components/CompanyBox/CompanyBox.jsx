//company box 
import React from "react";
import styles from "./companyBox.module.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CompanyBox = ({ id, title, date, location, image }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/OppInfo/${id}`);
    };
    return (
        <article className={styles.opportunityCard}>
      <img src={image} alt={title} className={styles.opportunityImage} />
      <div className={styles.opportunityInfo2}>
        <h3 className={styles.opportunityTitle}>{title}</h3>
        <p className={styles.opportunityDate}>{date}</p>
        <p className={styles.opportunityLocation}>{location}</p>
      </div>
      <button className={styles.viewDetailsButton} onClick={handleViewDetails}>View Details</button>
    </article>
    );
};

export default CompanyBox;

