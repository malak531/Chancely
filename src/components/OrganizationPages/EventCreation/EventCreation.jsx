import React from 'react';
import styles from './EventCreation.module.css';
import BackButton from './BackButton';
import ImageUploader from './ImageUploader';
import InterestTags from './InterestTags';
import DateRangePicker from './DateRangePicker';
import FormField from './FormField';
import DropdownField from './DropdownField';
import TextAreaField from './TextAreaField';
import HeaderLoggedIn from '../../HeaderLoggedIn/HeaderLoggedInUser';
const EventCreation = () => {
  return (
    <main className={styles.eventCreationContainer}>
      <section className={styles.formWrapper}>
        <header className={styles.formHeader}>
          <BackButton />
          <h1 className={styles.formTitle}>Create Opportunity Post</h1>
        </header>
        
        <form className={styles.eventForm}>
          <h2 className={styles.sectionTitle}>Opportunity Details</h2>
          
          <ImageUploader label="Event Image" />
          
          <InterestTags label="Event Fields of Interest*" />
          
          <DateRangePicker label="Event Dates*" />
          
          <FormField label="Event Title*" placeholder="Type event title" />
          
          <DropdownField label="Event Type*" placeholder="Select" />
          
          <DropdownField label="Event Location*" placeholder="Select" />
          
          <FormField label="Event Venue*" placeholder="Type your event venue" />
          
          <DropdownField label="Fees*" placeholder="Select" />
          
          <DateRangePicker label="Event Registration Deadline*" singleDate />
          
          <TextAreaField label="Joining criteria*" placeholder="1." />
          
          <TextAreaField label="Event Description*" placeholder="This event aims to..." />
          
          <button type="submit" className={styles.submitButton}>Post</button>
        </form>
      </section>
    </main>
  );
};

export default EventCreation;