import React, { useEffect } from 'react';import styles from './AccountCreationSuccess.module.css';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const { login } = useAuth(); // Log the user in via AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    // Log the user in when this page loads
    login("organization");
    // Redirect to the next page after a short delay
    const timer = setTimeout(() => navigate('/BrowseOpportunities'), 20000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, [login, navigate]);

  return (
    <main className={styles.accountCreationSuccess}>
      <section className={styles.contentWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7002d86591b1ab19ebd9c057290c71e7fb156ec007bfced8a89bedd2a4ecb222?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.backgroundImage} />
        <div className={styles.cardContainer}>
          <header className={styles.cardHeader}>
            <span className={styles.stepIndicator}>FINAL STEP</span>
            <h1 className={styles.pageTitle}>Account Created</h1>
          </header>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/683aed102e23fbd65fc15261b8309eac5f65070b99f387d44d7d11b2eca32e98?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Success checkmark" className={styles.successIcon} />
          <div className={styles.messageContainer}>
            <h2 className={styles.successMessage}>Account created successfully!</h2>
            <p className={styles.welcomeMessage}>
              Welcome aboard! Start your success journey with Chancely!
            </p>
          </div>
          <button className={styles.startButton} onClick={() => navigate('/BrowseOpportunities')}>Let's Start!</button>
        </div>
      </section>
    </main>
  );
};

export default Registration;