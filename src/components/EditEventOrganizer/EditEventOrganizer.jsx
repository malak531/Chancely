import React from 'react';
import styles from './EditEventOrganizerPage.module.css';
import Header from './Header';
import EventDetails from './EventDetails';
import EventFields from './EventFields';
import EventVenue from './EventVenue';
import EventDates from './EventDates';
import JoiningCriteria from './JoiningCriteria';
import EventDescription from './EventDescription';

function EditEventOrganizer() {
  return (
    <main className={styles.editEventOrganizerPage}>
      <Header/>
      <section className={styles.contentContainer}>
        <EventDetails/>
        <div className={styles.twoColumnLayout}>
          <EventFields/>
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