import React from 'react';
import styles from './EventCreationForm.module.css';
import BackButton from './BackButton';
import ImageUploader from './ImageUploader';
import InterestTags from './InterestTags';
import DateRangePicker from './DateRangePicker';
import FormField from './FormField';
import DropdownField from './DropdownField';
import TextAreaField from './TextAreaField';

const EventCreationForm = () => {
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
          <FormField label="Event Title*" type="text" placeholder="Type event title" />
          <DropdownField label="Event Type*" options={['Select', 'Conference', 'Workshop', 'Seminar', 'Webinar']} />
          <DropdownField label="Event Location*" options={['Select', 'Online', 'In-person', 'Hybrid']} />
          <FormField label="Event Venue*" type="text" placeholder="Type your event venue" />
          <DropdownField label="Fees*" options={['Select', 'Free', 'Paid']} />
          <FormField label="Event Registration Deadline*" type="date" placeholder="Select date" />
          <TextAreaField label="Joining criteria*" placeholder="1." />
          <TextAreaField label="Event Description*" placeholder="This event aims to..." />
          <button type="submit" className={styles.submitButton}>Post</button>
        </form>
      </section>
    </main>
  );
};

export default EventCreationForm;