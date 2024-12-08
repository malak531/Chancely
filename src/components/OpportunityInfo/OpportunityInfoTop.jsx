import React , {useState, useEffect}from 'react';
import styles from './OpportunityInfoTop.module.css';
import InfoItem from './InfoItem';
import HeaderLoggedIn from '../HeaderLoggedIn/HeaderLoggedInUser';
import { useParams } from 'react-router-dom';
import Header from '../EditEventOrganizer/Header';
import { useAuth } from '../AuthContext';
import AdminHeader from '../AdminHeader/AdminHeader';

const OpportunityInfoTop = () => {
    const { id } = useParams();
    const{userRole} = useAuth();
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
    <div>
{(
    userRole === "organization" ? 
  <Header/> :(userRole === "user"?
      <HeaderLoggedIn />: <AdminHeader/>
  ))}
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{opportunity.OpportunityName}</h1>
        <div className={styles.publishedBy}>
          <span className={styles.publishedByText}>Published by:</span>
          <span className={styles.publishedByHighlight}>{opportunity.Organization}</span>
        </div>
        <img loading="lazy" src={opportunity.Picture} alt={`${opportunity.OpportunityName} banner`} className={styles.banner} />
        <section className={styles.infoContainer}>
          <div className={styles.infoColumn}>

              <InfoItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" label="Type" value={opportunity.Type} />
              <InfoItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" label="Location" value={opportunity.Country} />
              <InfoItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" label="Fees" value={opportunity.FundingType} />

          </div>
          <div className={styles.infoColumn}>
              <InfoItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" label="Field" value={opportunity.Field} />
              <InfoItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" label="Duration" value={opportunity.EventDate} />
              <InfoItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" label="Venue" value={opportunity.Venue} />

          </div>
        </section>
      </div>
    </main>
    </div>
  );
};

export default OpportunityInfoTop;