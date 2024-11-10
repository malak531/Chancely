import React from 'react';
import styles from './OpportunityInfoTop.module.css';
import InfoItem from './InfoItem';
import HeaderLoggedIn from '../HeaderLoggedIn/HeaderLoggedInUser';
import { useParams } from 'react-router-dom';
import Header from '../EditEventOrganizer/Header';
import { useAuth } from '../AuthContext';
import AdminHeader from '../AdminHeader/AdminHEader';

const OpportunityInfoTop = () => {
    const { id } = useParams();
    const{userRole} = useAuth();
    
    let eventData = [{
        id:1,
        title: "Web Summit Qatar",
        publisher: "Web Summit",
        bannerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/fda5df9b493f0306e00ce5c8c4b3146e0e1b911f083e98d34e7b607f8e4b8579?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
        infoItems: [
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Type", value: "Conferences & Exhibitions" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Location", value: "Doha, Qatar" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Fees", value: "Free" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Field", value: "Technology, Information and Internet" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Duration", value: "February 23-26, 2025" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Venue", value: "Doha Exhibition and Convention Center" }
        ]
      },{id:2,
      title: "Leap",
      publisher: "Ministry of Communication and Information Technology",
      bannerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1afdc7b049fac86295c8b61f984d5c9f4f0b5f218d08c6acc47a5c370dc0511a?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
      infoItems: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Type", value: "Conferences" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Location", value: "Riyadh, Saudi Arabia" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Fees", value: "Free" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Field", value: "Technology, Data Science and AI" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Duration", value: "February 9-12, 2025" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Venue", value: "Riyadh International Convention and Exhibition Center" }
      ]
    },{id:3,
    title: "BlackHat 2024",
    publisher: "SAFCSP",
    bannerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/017ff25d7b72904229587f1a38e1d984e30975c7df25d2731eb21e6e33e86494?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
    infoItems: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Type", value: "Security Conference" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Location", value: "Riyadh, Saudi Arabia" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Fees", value: "Payment Required" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Field", value: "Technology, Information and Internet" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Duration", value: "November 26-28, 2024" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Venue", value: "Riyadh International Convention and Exhibition Center" }
    ]
  },{id:4,
    title: "Capacity Middle East 2025",
    publisher: "Capacity Media",
    bannerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1afdc7b049fac86295c8b61f984d5c9f4f0b5f218d08c6acc47a5c370dc0511a?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
    infoItems: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Type", value: "Conferences " },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Location", value: "Dubai, UAE" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Fees", value: "Paid Registration" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Field", value: "Technology, Network and Telecommunication" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Duration", value: "February 4-6, 2025" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Venue", value: "Grand Hyatt Dubai Conference & Exhibition Centre" }
    ]
  },{id:5,
  title: "Global Student Research Conference",
  publisher: "KFUPM",
  bannerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/2786ae9b7e46d1f801cb271b5ee87730d8e6eec19e9e807b3b4fcd069c052074?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
  infoItems: [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Type", value: "Conferences" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Location", value: "Dhahran, Saudi Arabia" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Fees", value: "Free" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Field", value: "Research" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Duration", value: "February 15-20, 2025" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Venue", value: "KFUPM" }
  ]
},
{id:6,
    title: "Seamless",
    publisher: "Web Summit",
    bannerImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d089f19f09f254bf7543404e11d2b0fd7836cab3406ec3af821990b941cf09c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
    infoItems: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f407b3ff2cb0a06a438515bc96185e48b24691a08dad0a7b66083e84d95885c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Type", value: "Conferences & Exhibitions" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff951029211857e2bf3016b4813ac1166bbd10c83f7ca4cfd824320adcf302?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Location", value: "Dubai, UAE" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/393ee99dcba4a40bc1203dfdba9d6d43f04ee6dc8bbc8f96d6fb45ec217af447?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Fees", value: "Free" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/570d7c6f939072e3826fa1fc48683ebb812a831381851b0763faf0f40371876c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Field", value: "Technology, Information and Internet" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd7654d4cb377a8ec0a01b5a88c4092a990d3a2a857ac8bc704dd61f77b6b439?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Duration", value: "May 20-25, 2025" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2abe7c79b06066a3a20ff71a013d9d84c71350f8f2ce4dcde8ab162b6d798b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", label: "Venue", value: "Dubai World Trade Centre" }
    ]
  }];
  const event = eventData.find(event => event.id === parseInt(id));
  let title = event.title;
  let publisher = event.publisher;
  let bannerImage = event.bannerImage;
  let infoItems = event.infoItems;


  return (
    <div>
{(
    userRole === "organization" ? 
  <Header/> :(userRole === "user"?
      <HeaderLoggedIn />: <AdminHeader/>
  ))}
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.publishedBy}>
          <span className={styles.publishedByText}>Published by:</span>
          <span className={styles.publishedByHighlight}>{publisher}</span>
        </div>
        <img loading="lazy" src={bannerImage} alt={`${title} banner`} className={styles.banner} />
        <section className={styles.infoContainer}>
          <div className={styles.infoColumn}>
            {infoItems.slice(0, 3).map((item, index) => (
              <InfoItem key={index} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
          <div className={styles.infoColumn}>
            {infoItems.slice(3).map((item, index) => (
              <InfoItem key={index + 3} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
        </section>
      </div>
    </main>
    </div>
  );
};

export default OpportunityInfoTop;