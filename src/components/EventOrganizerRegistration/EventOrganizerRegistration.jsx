import React from 'react';
import styles from './EventOrganizerRegistration.module.css';
import InputField from './InputField';
import SelectField from './SelectField';
import Dropdown from './dropdown';


const EventOrganizerRegistration = () => {
  return (
    <main className={styles.registrationContainer}>
      <div className={styles.registrationWrapper}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/ae09441f19d9cca54480725b71322ee37770ad48ae4607ce2f246b4471842c16?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" 
          alt="" 
          className={styles.backgroundImage} 
        />
        <form className={styles.formContainer}>
          <div className={styles.stepIndicator}>STEP 01/02</div>
          <div className={styles.stepDescription}>Fill Info.</div>
          <h1 className={styles.formTitle}>Register as an event organizer!</h1>
          <p className={styles.formDescription}>
            Ready to Share Your Opportunities with the World? Let's get started by setting up your organizer profile.
          </p>
          <div className={styles.divider} />
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <InputField label="Organization Name*" placeholder="Enter name" />
                <InputField label="Email address*" placeholder="Enter email address" type="email" />
                <InputField label="Create password*" placeholder="Enter password" type="password" />
                <InputField label="Organization URL*" placeholder="Enter your organization website URL" />
              </div>
              <div className={styles.formColumn}>
                <Dropdown label="Country" placeholder="Select Your Country" options = {["Bahrain", "Saudi Arabia", "Kuwait", "UAE", "Lebanon", "Jordan", "Egypt", "Oman", "Qatar", "Iraq"]}/>
                <Dropdown label="Industry" placeholder="Select your industry" options={["Information Technology", " Law & Policy ", " Art & Humanities ", " Education & Teaching ", " Real Estate & Urban Development "," Sports ", " Agriculture & Food ", " Startups & Innovation ", " Logistics & Supply Chain " , " Business & Management ", " Sustainability & Environment ", " Healthcare & Medicine "]} />
                <Dropdown label="Type" placeholder="Select your organization type" options={["profit", "non profit"]} />
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Logo (optional)</label>
                  <div className={styles.logoUpload}>
                    <button type="button" className={styles.uploadButton}>
                      <img src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/d15380cc2c0805f7e46b6003c6a68a59edd8c3c396dde2dae2edef998d99a9fe?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" alt="" className={styles.uploadIcon} />
                      <span className={styles.uploadText}>Upload Logo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="overview" className={styles.overviewLabel}>Overview*</label>
          <textarea
            id="overview"
            className={styles.overviewTextarea}
            placeholder="Briefly describe your organization"
          />
          <div className={styles.termsContainer}>
            <div className={styles.termsWrapper}>
              <input type="checkbox" id="terms" className={styles.checkboxController} />
              <label htmlFor="terms" className={styles.termsLabel}>
                I agree to terms & conditions
              </label>
            </div>
          </div>
          <button type="submit" className={styles.registerButton}>
            Register Account
          </button>
        </form>
      </div>
    </main>
  );
};

export default EventOrganizerRegistration;