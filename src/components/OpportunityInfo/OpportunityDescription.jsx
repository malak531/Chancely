import React, {useEffect, useState} from 'react';
import styles from './OpportunityDescription.module.css';
import SectionTitle from './SectionTitle';
import ActionButton from './ActionButton';
import { useParams } from 'react-router-dom';



const OpportunityDescription = () => {
    const { id } = useParams();
    const [opportunity, setOpportunity] = useState(null); // State to hold opportunity data

    useEffect(() => {
      // Fetch opportunity data when component mounts
      const fetchOpportunity = async () => {
        try {
          const response = await fetch (`/api/opportunity/${id}`);
          const data = await response.json();
          setOpportunity(data);
        } catch (error) {
          console.error('Error fetching opportunity:', error);
        }
      };
  
      fetchOpportunity();
    }, [id]);
  
    if (!opportunity) {
      return <div>Loading...</div>; // Display loading message until data is fetched
    }
      

    return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section>
          <SectionTitle className={styles.sectionTitle}>Description</SectionTitle>
          <p className={styles.sectionDescription}>{opportunity.Description}</p>
        </section>
        
        <section>
          <SectionTitle className={styles.criteriaTitle}>Joining Criteria</SectionTitle>
          <p className={styles.criteriaDescription}>{opportunity.Criteria}</p>
        </section>
        
        <section>
          <SectionTitle className={styles.applyNowTitle}>Apply now</SectionTitle>
          <div className={styles.buttonContainer}>
              <ActionButton  href={opportunity.RegistrationLink} text="Registration" />
              <ActionButton  href={opportunity.Website} text="Official Website" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default OpportunityDescription;
