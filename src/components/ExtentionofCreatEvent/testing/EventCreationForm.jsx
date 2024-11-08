import React, { useState } from 'react';
import styles from './EventCreationForm.module.css';

const EventCreationForm = () => {
  const [image, setImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    location: '',
    venue: '',
    fees: '',
    registrationDeadline: '',
    joiningCriteria: '',
    description: ''
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ...formData, image, selectedTags, startDate, endDate });
  };

  const tags = [
    'Information Technology', 'Law & Policy', 'Art & Humanities',
    'Logistics & Supply Chain', 'Business & Management', 'Education & Teaching',
    'Agriculture & Food', 'Sports', 'Startups & Innovation',
    'Real Estate & Urban Development', 'Sustainability & Environment', 'Healthcare & Medicine'
  ];

  return (
    <main className={styles.eventCreationContainer}>
      <section className={styles.formWrapper}>
        <header className={styles.formHeader}>
          <button className={styles.backButton}>
            <img src="/images/back-arrow.svg" alt="" className={styles.backIcon} />
            <span>Back</span>
          </button>
          <h1 className={styles.formTitle}>Create Opportunity Post</h1>
        </header>
        <form className={styles.eventForm} onSubmit={handleSubmit}>
          <h2 className={styles.sectionTitle}>Opportunity Details</h2>
          
          <div className={styles.imageUploaderContainer}>
            <label htmlFor="eventImage" className={styles.imageLabel}>Event Image</label>
            <div className={styles.dropzone}>
              {image ? (
                <img src={image} alt="Uploaded event" className={styles.uploadedImage} />
              ) : (
                <>
                  <img src="/images/upload-icon.svg" alt="" className={styles.uploadIcon} />
                  <p className={styles.uploadText}>Click to browse or drop here</p>
                </>
              )}
              <input
                type="file"
                id="eventImage"
                accept="image/*"
                className={styles.fileInput}
                onChange={handleImageChange}
                aria-label="Upload event image"
              />
            </div>
          </div>
          
          <div className={styles.interestTagsContainer}>
            <label className={styles.tagLabel}>Event Fields of Interest*</label>
            <div className={styles.tagWrapper}>
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className={`${styles.tag} ${selectedTags.includes(tag) ? styles.selected : ''}`}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  aria-pressed={selectedTags.includes(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className={styles.dateRangeContainer}>
            <label htmlFor="startDate" className={styles.dateLabel}>Event Dates*</label>
            <div className={styles.dateInputWrapper}>
              <input
                type="date"
                id="startDate"
                className={styles.dateInput}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                aria-label="Start date"
              />
              <span className={styles.dateSeparator}>
                <img src="/images/date-separator.svg" alt="" className={styles.separatorIcon} />
              </span>
              <input
                type="date"
                id="endDate"
                className={styles.dateInput}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                aria-label="End date"
              />
              <img src="/images/calendar-icon.svg" alt="" className={styles.calendarIcon} />
            </div>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="title" className={styles.fieldLabel}>Event Title*</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Type event title"
              className={styles.fieldInput}
              value={formData.title}
              onChange={handleInputChange}
              aria-label="Event Title"
            />
          </div>
          
          <div className={styles.dropdownField}>
            <label htmlFor="type" className={styles.dropdownLabel}>Event Type*</label>
            <div className={styles.selectWrapper}>
              <select
                id="type"
                name="type"
                className={styles.selectInput}
                value={formData.type}
                onChange={handleInputChange}
                aria-label="Event Type"
              >
                <option value="">Select</option>
                <option value="conference">Conference</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="webinar">Webinar</option>
              </select>
              <img src="/images/dropdown-arrow.svg" alt="" className={styles.dropdownIcon} />
            </div>
          </div>
          
          <div className={styles.dropdownField}>
            <label htmlFor="location" className={styles.dropdownLabel}>Event Location*</label>
            <div className={styles.selectWrapper}>
              <select
                id="location"
                name="location"
                className={styles.selectInput}
                value={formData.location}
                onChange={handleInputChange}
                aria-label="Event Location"
              >
                <option value="">Select</option>
                <option value="online">Online</option>
                <option value="in-person">In-person</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <img src="/images/dropdown-arrow.svg" alt="" className={styles.dropdownIcon} />
            </div>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="venue" className={styles.fieldLabel}>Event Venue*</label>
            <input
              type="text"
              id="venue"
              name="venue"
              placeholder="Type your event venue"
              className={styles.fieldInput}
              value={formData.venue}
              onChange={handleInputChange}
              aria-label="Event Venue"
            />
          </div>
          
          <div className={styles.dropdownField}>
            <label htmlFor="fees" className={styles.dropdownLabel}>Fees*</label>
            <div className={styles.selectWrapper}>
              <select
                id="fees"
                name="fees"
                className={styles.selectInput}
                value={formData.fees}
                onChange={handleInputChange}
                aria-label="Fees"
              >
                <option value="">Select</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
              <img src="/images/dropdown-arrow.svg" alt="" className={styles.dropdownIcon} />
            </div>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="registrationDeadline" className={styles.fieldLabel}>Event Registration Deadline*</label>
            <input
              type="date"
              id="registrationDeadline"
              name="registrationDeadline"
              className={styles.fieldInput}
              value={formData.registrationDeadline}
              onChange={handleInputChange}
              aria-label="Event Registration Deadline"
            />
          </div>
          
          <div className={styles.textAreaField}>
            <label htmlFor="joiningCriteria" className={styles.textAreaLabel}>Joining criteria*</label>
            <textarea
              id="joiningCriteria"
              name="joiningCriteria"
              placeholder="1."
              className={styles.textAreaInput}
              value={formData.joiningCriteria}
              onChange={handleInputChange}
              aria-label="Joining criteria"
            ></textarea>
          </div>
          
          <div className={styles.textAreaField}>
            <label htmlFor="description" className={styles.textAreaLabel}>Event Description*</label>
            <textarea
              id="description"
              name="description"
              placeholder="This event aims to..."
              className={styles.textAreaInput}
              value={formData.description}
              onChange={handleInputChange}
              aria-label="Event Description"
            ></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>Post</button>
        </form>
      </section>
    </main>
  );
};

export default EventCreationForm;