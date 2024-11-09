import React from 'react';
import styles from './AccountCreationSuccess.module.css';

const AccountCreationSuccess = () => {
  return (
    <main className={styles.accountCreationSuccess}>
      <section className={styles.contentWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7002d86591b1ab19ebd9c057290c71e7fb156ec007bfced8a89bedd2a4ecb222?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.backgroundImage} />
        <div className={styles.cardContainer}>
          <header className={styles.cardHeader}>
            <span className={styles.stepIndicator}>STEP 03/03</span>
            <h1 className={styles.pageTitle}>Account Created</h1>
          </header>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/683aed102e23fbd65fc15261b8309eac5f65070b99f387d44d7d11b2eca32e98?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Success checkmark" className={styles.successIcon} />
          <div className={styles.messageContainer}>
            <h2 className={styles.successMessage}>Account created successfully!</h2>
            <p className={styles.welcomeMessage}>
              Welcome aboard! Start your success journey with Chancely!
            </p>
          </div>
          <button className={styles.startButton}>Let's Start!</button>
        </div>
      </section>
    </main>
  );
};

export default AccountCreationSuccess;