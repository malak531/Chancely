import React from 'react';
import styles from './EventCreation.module.css';
import ImageUploader from './ImageUploader';
import DateRangePicker from './DateRangePicker';
import FormField from './FormField';
import DropdownField from './DropdownField';
import TextAreaField from './TextAreaField';
import Header from '../../EditEventOrganizer/Header';
import InterestTags from './InterestTags';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import AdminHeader from '../../AdminHeader/AdminHEader';
import { useAuth } from '../../AuthContext';

const EventCreation = () => {
  let EventType = ['Conference', 'Exhibition', 'Competition', 'Short Course', 'Summer Program'];
  let EventLocation = ['Bahrain', 'Saudi Arabia', 'Lebanon', 'Jordan', 'Kuwait', 'Yemen', 'Egypt', 'Syria', 'Oman', 'United Arab Emirates', 'Qatar', 'Iraq'];
  let FeesType = ['Free', 'Partially-Funded', 'Self-Funded'];
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
  
    const handlePostOpportunity = () => {
      event.preventDefault();
      // Code to post opportunity (e.g., API call)
      setShowAlert(true);
  
  
      // Hide alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
        navigate("/BrowseOpportunities");
      }, 5000);
    };
    const {userRole} = useAuth();
  return (
    <div className={styles.container}>

      {userRole === "organization" ? 
  <Header/>: <AdminHeader/>}
      <main className={styles.eventCreationContainer}>
        <section className={styles.formWrapper}>
          <header className={styles.formHeader}>
            <h1 className={styles.formTitle}>Create Opportunity Post</h1>
          </header>
          
          <form className={styles.eventForm}>
            <h2 className={styles.sectionTitle}>Opportunity Details</h2>
            
            <ImageUploader label="Event Image" />
            
            <InterestTags/>
            
            <DateRangePicker label="Event Dates*" />
            
            <FormField label="Event Title*" placeholder="Type event title" />
            
            <DropdownField label="Event Type*" placeholder='Select Event Type' options={EventType} />
         
            
            <DropdownField label="Event Location*" placeholder="Select Event Location" options = {EventLocation}/>
            
            <FormField label="Event Venue*" placeholder="Type your event venue" />
            
            <DropdownField label="Fees*" placeholder="Select Fees Type" options = {FeesType}/>
            
            <DateRangePicker label="Event Registration Deadline*" singleDate />
            
            <TextAreaField label="Joining criteria*" placeholder="1." />
            
            <TextAreaField label="Event Description*" placeholder="This event aims to..." />
            
            <button onClick={handlePostOpportunity} type="submit" className={styles.submitButton}>Post</button>
            {showAlert && (
        <div className={styles.alert}>
          Opportunity posted successfully!
        </div>
      )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default EventCreation;
