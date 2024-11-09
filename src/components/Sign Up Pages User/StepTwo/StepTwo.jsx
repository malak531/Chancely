import React from 'react';
import styles from './StepTwo.module.css';
import FormStep from './FormStep';
import InputField from './InputField';
import PasswordField from './PasswordField';
import PasswordConstraints from './PasswordConstraints';
import CheckboxField from './CheckboxField';
import Button from './Button';

function StepTwo() {
  return (
    <main className={styles.registrationContainer}>
      <div className={styles.formWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/983b8e221d1e97878dac37b1bf0fd7fcadbd2091611db8ef2524c6567a3debaf?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className={styles.backgroundImage} />
        <section className={styles.formContent}>
          <FormStep step="01" totalSteps="03" description="Fill Info." />
          <h1 className={styles.formTitle}>Register as a User!</h1>
          <p className={styles.formDescription}>
            Tell us a bit about yourself so we can personalize your experience.
          </p>
          <hr className={styles.divider} />
          <form className={styles.registrationForm}>
            <InputField
              label="Your Name*"
              type="text"
              placeholder="Enter name"
              id="name"
            />
            <InputField
              label="Email address*"
              type="email"
              placeholder="Enter email address"
              id="email"
            />
            <PasswordField
              label="Create password*"
              placeholder="Enter password"
              id="password"
            />
            <PasswordConstraints />
        
            <Button type="submit" className={styles.registerButton}>
              Register Account
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default StepTwo;