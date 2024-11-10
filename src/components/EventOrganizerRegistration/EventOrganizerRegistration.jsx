import React, { useState } from 'react'; // Importing React and useState for managing state
import styles from './EventOrganizerRegistration.module.css'; // Importing CSS module for styling
import InputField from './InputField'; // Importing custom InputField component
import Dropdown from './dropdown'; // Importing custom Dropdown component
import { useNavigate } from 'react-router'; // Importing useNavigate hook for routing
import { useAuth } from '../AuthContext'; // Importing useAuth hook for authentication context

const EventOrganizerRegistration = () => {
  const navigate = useNavigate(); // Initializing the navigate function for routing
  const { login } = useAuth(); // Getting login function from the auth context
  
  const [logo, setLogo] = useState(null); // State to manage logo file upload
  const [formData, setFormData] = useState({ // State to store form data
    orgName: '',
    email: '',
    password: '',
    url: '',
    country: '',
    industry: '',
    orgType: '',
    overview: '',
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  // Handle input changes and field validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update formData state with the new field value
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validate the field and update error state
    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };

      // Validate the current field
      const errorMessage = validateField(name, value);
      if (errorMessage) {
        newErrors[name] = errorMessage; // Set error message if validation fails
      } else {
        delete newErrors[name]; // Remove error if validation is successful
      }

      return newErrors;
    });
  };

  // Field validation logic
  const validateField = (name, value) => {
    switch (name) {
      case 'orgName':
        return value ? null : 'Organization Name is required'; // Required validation for orgName
      case 'email':
        return value ? null : 'Email address is required'; // Required validation for email
      case 'password':
        return value ? null : 'Password is required'; // Required validation for password
      case 'url':
        return value ? null : 'Organization URL is required'; // Required validation for URL
      case 'country':
        return value ? null : 'Country is required'; // Required validation for country
      case 'industry':
        return value ? null : 'Industry is required'; // Required validation for industry
      case 'orgType':
        return value ? null : 'Organization type is required'; // Required validation for orgType
      case 'overview':
        return value ? null : 'Overview is required'; // Required validation for overview
      default:
        return null; // Return null if no validation rule for the field
    }
  };

  // Handle logo file upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file); // Update logo state with selected file
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Only submit if there are no errors
    if (Object.keys(errors).length === 0) {
      // If no errors, proceed with registration
      handleSuccessRegistration();
    }
  };

  // Handle successful registration
  const handleSuccessRegistration = () => {
    login("organization"); // Trigger login for organization
    navigate('/success'); // Navigate to the success page after successful registration
  };

  return (
    <main className={styles.registrationContainer}>
      <div className={styles.registrationWrapper}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/ae09441f19d9cca54480725b71322ee37770ad48ae4607ce2f246b4471842c16?apiKey=05d1d044449441c1b326e0ad9c21dcf1&" 
          alt="" 
          className={styles.backgroundImage} 
        />
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.stepIndicator}>STEP 01/02</div> {/* Displaying step indicator */}
          <div className={styles.stepDescription}>Fill Info.</div> {/* Step description */}
          <h1 className={styles.formTitle}>Register as an event organizer!</h1>
          <p className={styles.formDescription}>
            Ready to Share Your Opportunities with the World? Let's get started by setting up your organizer profile.
          </p>
          <div className={styles.divider} />
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                {/* Organization name input field */}
                <InputField 
                  label="Organization Name*" 
                  name="orgName"
                  value={formData.orgName}
                  placeholder="Enter name" 
                  onChange={handleInputChange}
                  error={errors.orgName}
                />
                {/* Email input field */}
                <InputField 
                  label="Email address*" 
                  name="email"
                  value={formData.email}
                  placeholder="Enter email address" 
                  type="email"
                  onChange={handleInputChange}
                  error={errors.email}
                />
                {/* Password input field */}
                <InputField 
                  label="Create password*" 
                  name="password"
                  value={formData.password}
                  placeholder="Enter password" 
                  type="password"
                  onChange={handleInputChange}
                  error={errors.password}
                />
                {/* URL input field */}
                <InputField 
                  label="Organization URL*" 
                  name="url"
                  value={formData.url}
                  placeholder="Enter your organization website URL" 
                  onChange={handleInputChange}
                  error={errors.url}
                />
              </div>
              <div className={styles.formColumn}>
                {/* Country dropdown */}
                <Dropdown 
                  label="Country" 
                  name="country"
                  value={formData.country}
                  placeholder="Select Your Country" 
                  options={["Bahrain", "Saudi Arabia", "Kuwait", "UAE", "Lebanon", "Jordan", "Egypt", "Oman", "Qatar", "Iraq"]}
                  onChange={handleInputChange}
                  error={errors.country}
                />
                {/* Industry dropdown */}
                <Dropdown 
                  label="Industry" 
                  name="industry"
                  value={formData.industry}
                  placeholder="Select your industry" 
                  options={["Information Technology", "Law & Policy", "Art & Humanities", "Education & Teaching", "Real Estate & Urban Development", "Sports", "Agriculture & Food", "Startups & Innovation", "Logistics & Supply Chain", "Business & Management", "Sustainability & Environment", "Healthcare & Medicine"]} 
                  onChange={handleInputChange}
                  error={errors.industry}
                />
                {/* Organization type dropdown */}
                <Dropdown 
                  label="Type" 
                  name="orgType"
                  value={formData.orgType}
                  placeholder="Select your organization type" 
                  options={["profit", "non profit"]} 
                  onChange={handleInputChange}
                  error={errors.orgType}
                />
                {/* Logo file upload */}
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Logo (optional)</label>
                  <div className={styles.logoUpload}>
                    <input 
                      type="file" 
                      id="logo-upload" 
                      accept="image/*" 
                      className={styles.uploadInput} 
                      onChange={handleLogoChange} 
                    />
                    <label htmlFor="logo-upload" className={styles.uploadButton}>
                      <img 
                        src={logo || "https://cdn.builder.io/api/v1/image/assets/05d1d044449441c1b326e0ad9c21dcf1/d15380cc2c0805f7e46b6003c6a68a59edd8c3c396dde2dae2edef998d99a9fe?apiKey=05d1d044449441c1b326e0ad9c21dcf1&"} 
                        alt="Logo Icon" 
                        className={styles.uploadIcon} 
                      />
                      <span className={styles.uploadText}>Upload Logo</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Overview textarea */}
          <label htmlFor="overview" className={styles.overviewLabel}>Overview*</label>
          <textarea
            id="overview"
            name="overview" // Ensure the name matches the key in formData
            className={styles.overviewTextarea}
            placeholder="Briefly describe your organization"
            value={formData.overview} // Bind the value to state
            onChange={handleInputChange} // Update the state on change
          />
          {/* Display error for overview */}
          {errors.overview && <div className={styles.errorMessage}>{errors.overview}</div>}
          {/* Submit button */}
          <button type="submit" className={styles.submitButton}>Create Account</button>
        </form>
      </div>
    </main>
  );
};

export default EventOrganizerRegistration;
