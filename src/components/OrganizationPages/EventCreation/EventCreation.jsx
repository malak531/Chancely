import React, { useState } from 'react';
import styles from './EventCreation.module.css';
import ImageUploader from './ImageUploader';
import DateRangePicker from './DateRangePicker';
import FormField from './FormField';
import Header from '../../EditEventOrganizer/Header';
import InterestTags from './InterestTags';
import AdminHeader from '../../AdminHeader/AdminHeader';
import { useNavigate } from 'react-router';
import { useAuth } from '../../AuthContext';
import DropdownField from './DropdownField';
import TextAreaField from './TextAreaField';

const EventCreation = () => {
  const navigate = useNavigate(); // Initialize navigate for routing
  const { userRole } = useAuth(); // Get user role from authentication context
  const [message, setMessage] = useState(""); // Declares the state variable and its updater function
  const [formData, setFormData] = useState({ // State to store form data
    eventImage: null,
    eventTitle: '',
    eventType: '',
    eventLocation: '',
    eventVenue: '',
    feesType: '',
    eventDates: '2003/05/02',
    joiningCriteria: '',
    eventDescription: '',
    registrationLink: '',
    officialWebsite: '',
    Deadline: 'TBA', 
    eventCity: ''
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  const EventType = ['Conference', 'Exhibition', 'Competition', 'Short Course', 'Summer Program'];
  const EventLocation = ['Bahrain', 'Saudi Arabia', 'Lebanon', 'Jordan', 'Kuwait', 'Yemen', 'Egypt', 'Syria', 'Oman', 'United Arab Emirates', 'Qatar', 'Iraq'];
  const FeesType = ['Free', 'Partially-Funded', 'Self-Funded'];

  // Handle input changes and field validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      const errorMessage = validateField(name, value);
      if (errorMessage) {
        newErrors[name] = errorMessage;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  // Field validation logic
  const validateField = (name, value) => {
    switch (name) {
      case 'eventTitle':
        return value ? null : 'Event Title is required';
      case 'eventType':
        return value ? null : 'Event Type is required';
      case 'eventLocation':
        return value ? null : 'Event Location is required';
      case 'eventVenue':
        return value ? null : 'Event Venue is required';
      case 'feesType':
        return value ? null : 'Fees Type is required';
      case 'joiningCriteria':
        return value ? null : 'Joining Criteria is required';
      case 'eventDescription':
        return value ? null : 'Event Description is required';
      case 'registrationLink':
        return value ? null : 'Registration link is required';
      case 'officialWebsite':
        return value ? null : 'Official Website is required';
        case 'eventCity':
          return value ? null : 'The city is required';
      default:
        return null;
    }
  };

  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        console.log(formData);
        const response = await fetch("/api/eventCreation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
   
        if (response.ok) {
          const result = await response.json();
          setMessage(`Opportunity "${result.OpportunityName}" has been created successfully!`);
          navigate('/BrowseOpportunities'); // Navigate after successful submission
        } else {
          setMessage("Failed to create the opportunity. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("An error occurred while creating the opportunity.");
      }
    }
  };

  // Handle successful submission
  const handleSuccessSubmission = () => {
    navigate('/BrowseOpportunities'); // Navigate to browse opportunities page after submission
  };

  return (
    <main className={styles.eventCreationContainer}>
      <div className={styles.eventCreationWrapper}>
        {userRole === 'organization' ? <Header /> : <AdminHeader />}
        <form className={styles.formContainer} onSubmit={handleSubmit} method='POST' >
          <h1 className={styles.formTitle}>Create Opportunity Post</h1>
          <p className={styles.formDescription}>
            Share your exciting event with the community. Fill in the details below to post your opportunity.
          </p>
          <div className={styles.divider} />
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <ImageUploader 
                  label="Event Image" 
                  onChange={(file) => setFormData((prev) => ({ ...prev, eventImage: file }))}
                />
                <InterestTags />
                <DateRangePicker 
                  label="Event Dates*" 
                  onChange={(dates) => setFormData((prev) => ({ ...prev, eventDates: dates }))}
                />
                <FormField 
                  label="Event Title*" 
                  name="eventTitle"
                  value={formData.eventTitle}
                  placeholder="Type event title" 
                  onChange={handleInputChange} 
                  error={errors.eventTitle}
                />
              </div>
              <div className={styles.formColumn}>
                <DropdownField 
                  label="Event Type*" 
                  name="eventType"
                  value={formData.eventType}
                  placeholder="Select Event Type" 
                  options={EventType} 
                  onChange={handleInputChange} 
                  error={errors.eventType}
                />
                <DropdownField 
                  label="Event Location*" 
                  name="eventLocation"
                  value={formData.eventLocation}
                  placeholder="Select Event Location" 
                  options={EventLocation} 
                  onChange={handleInputChange} 
                  error={errors.eventLocation}
                />
                <FormField 
                  label="City*" 
                  name="eventCity"
                  value={formData.eventCity}
                  placeholder="Type your event city location" 
                  onChange={handleInputChange} 
                  error={errors.eventCity}
                />
                <FormField 
                  label="Event Venue*" 
                  name="eventVenue"
                  value={formData.eventVenue}
                  placeholder="Type your event venue" 
                  onChange={handleInputChange} 
                  error={errors.eventVenue}
                />
                <DropdownField 
                  label="Fees*" 
                  name="feesType"
                  value={formData.feesType}
                  placeholder="Select Fees Type" 
                  options={FeesType} 
                  onChange={handleInputChange} 
                  error={errors.feesType}
                />

                <FormField 
                  label="Registration Link*" 
                  name="registrationLink"
                  value={formData.registrationLink}
                  placeholder="Type the registration link" 
                  onChange={handleInputChange} 
                  error={errors.registrationLink}
                />
                <FormField 
                  label="Official Website*" 
                  name="officialWebsite"
                  value={formData.officialWebsite}
                  placeholder="Type the official website link" 
                  onChange={handleInputChange} 
                  error={errors.officialWebsite}
                />
              </div>
            </div>
          </div>
          <label htmlFor="joiningCriteria" className={styles.textareaLabel}>Joining Criteria*</label>
          <TextAreaField
            id="joiningCriteria"
            name="joiningCriteria"
            className={styles.textarea}
            placeholder="1."
            value={formData.joiningCriteria}
            onChange={handleInputChange}
          />
          {errors.joiningCriteria && <div className={styles.errorMessage}>{errors.joiningCriteria}</div>}

          <label htmlFor="eventDescription" className={styles.textareaLabel}>Event Description*</label>
          <TextAreaField
            id="eventDescription"
            name="eventDescription"
            className={styles.textarea}
            placeholder="This event aims to..."
            value={formData.eventDescription}
            onChange={handleInputChange}
          />
          {errors.eventDescription && <div className={styles.errorMessage}>{errors.eventDescription}</div>}

          <button type="submit" className={styles.submitButton}>Post Opportunity</button>
        </form>
      </div>
    </main>
  );
};

export default EventCreation;
