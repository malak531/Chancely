import React from 'react';
import OneType from './OneType';
import styles from './SelectType.module.css';
import { Link } from 'react-router-dom';


const SelectType = () => {
  const opportunities = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c175fe3-5c7e-4a6e-9271-5e8eb430be55?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
      title: "I'm Seeking Opportunities",
      description: "Discover and connect with the best educational and professional events tailored to your interests",
      arrowIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/769d02ff16e9fe4dc411071f6401bb7bd5da325278a81c052569a87ea09e71bb?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
      link: "/Step2"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4774ba7-8ce3-4566-a969-3a1caee01976?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a",
      title: "I Would Like to Post Opportunities",
      description: "Promote your events to a wide audience and connect with engaged professionals and students",
      arrowIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/769d02ff16e9fe4dc411071f6401bb7bd5da325278a81c052569a87ea09e71bb?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
      ,link:"/OrganizationRegistration"
    }
  ];

  return (
    <main className={styles.container}>
      {opportunities.map((opportunity, index) => (
        <OneType key={index} {...opportunity} />
      ))}
      <p className={styles.loginPrompt}>
        Already have an account? <Link to = "/login"className={styles.loginLink}>Log In</Link>
      </p>
    </main>
  );
};

export default SelectType;