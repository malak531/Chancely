import React from 'react';
import styles from './EventCreation.module.css';
import BackButton from './BackButton';
import ImageUploader from './ImageUploader';
import InterestTags from './InterestTags';
import DateRangePicker from './DateRangePicker';
import FormField from './FormField';
import DropdownField from './DropdownField';
import TextAreaField from './TextAreaField';
import OrgnizerHeader from '../../OrgnizerHeader/OrgnizerHeader';
import InterestsSection from '../../User Pages/Profile/InterestsSection';
import ContactInfoFooter from '../../ContactInfoFooter/ContactInfoFooter';

const EventCreation = () => {
  let EventType = ['Conference', 'Exhibition', 'Competition', 'Short Course', 'Summer Program'];
  let EventLocation = ['Bahrain', 'Saudi Arabia', 'Lebanon', 'Jordan', 'Kuwait', 'Yemen', 'Egypt', 'Syria', 'Oman', 'United Arab Emirates', 'Qatar', 'Iraq'];
  let FeesType = ['Free', 'Partially-Funded', 'Self-Funded'];

  return (
    <>
      {/* Organizer header positioned at the top of the page */}
      <OrgnizerHeader />
      
      <main className={styles.eventCreationContainer}>
        <section className={styles.formWrapper}>
          <header className={styles.formHeader}>
            <BackButton />
            <h1 className={styles.formTitle}>Create Opportunity Post</h1>
          </header>
          
          <form className={styles.eventForm}>
            <h2 className={styles.sectionTitle}>Opportunity Details</h2>
            
            <ImageUploader label="Event Image" />
            
            <InterestsSection />
            
            <DateRangePicker label="Event Dates*" />
            
            <FormField label="Event Title*" placeholder="Type event title" />
            
            <DropdownField label="Event Type*" placeholder='Select Event Type' options={EventType} />
         
            
            <DropdownField label="Event Location*" placeholder="Select Event Location" options = {EventLocation}/>
            
            <FormField label="Event Venue*" placeholder="Type your event venue" />
            
            <DropdownField label="Fees*" placeholder="Select Fees Type" options = {FeesType}/>
            
            <DateRangePicker label="Event Registration Deadline*" singleDate />
            
            <TextAreaField label="Joining criteria*" placeholder="1." />
            
            <TextAreaField label="Event Description*" placeholder="This event aims to..." />
            
            <button type="submit" className={styles.submitButton}>Post</button>
          </form>
        </section>
      </main>
      <ContactInfoFooter/>
    </>
  );
};

export default EventCreation;
