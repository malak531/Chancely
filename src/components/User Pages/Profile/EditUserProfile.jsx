import React from "react";
import styles from './EditUserProfile.module.css';
import ProfileCard from "./ProfileCard";
import InterestsSection from "./InterestsSection";
import HeaderLoggedIn from "../../HeaderLoggedIn/HeaderLoggedInUser";
import ContactInfoFooter from "../../ContactInfoFooter/ContactInfoFooter";
import SaveButton from "./SaveButton";

function EditUserProfile( ) {
    
  return (
    <div className={styles.content}>
      <HeaderLoggedIn />
      <div className={styles.container}>
        <ProfileCard />
        <div className={styles.button}>
        <SaveButton/>
        </div>
        <div className={styles.interest}>
          <InterestsSection />
        </div>
      </div>
      <ContactInfoFooter />
    </div>
   
  );
}

export default EditUserProfile;