import React from 'react';
import styles from './EditEventOrganizerPage.module.css';
import Header from './Header';
import EventDetails from './EventDetails';
import InterestTags from '../OrganizationPages/EventCreation/InterestTags';
import EventDates from './EventDates';
import JoiningCriteria from './JoiningCriteria';
import EventDescription from './EventDescription';
import EventVenue from './EventVenue';
import ContactInfoFooter from '../ContactInfoFooter/ContactInfoFooter';
import OrgnizerHeader from '../OrgnizerHeader/OrgnizerHeader';
import EventTitle from './EventTitle';
import EventFees from './EventFees';

function EditEventOrganizer() {
  return (
    <main className={styles.editEventOrganizerPage}>
      <Header/>
      <section className={styles.contentContainer}>
        <EventDetails/>
        <div className={styles.twoColumnLayout}>
          <InterestTags/>
          <div>
          <EventTitle/>
          <EventFees/>
          </div>
          <EventVenue/>
        </div>
        <EventDates/>
        <JoiningCriteria/>
        <EventDescription/>
        <button className={styles.saveButton}>Save</button>
      </section>
    </main>
  );
}

export default EditEventOrganizer;