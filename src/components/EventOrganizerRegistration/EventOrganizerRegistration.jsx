import React, { useState } from 'react';
import styles from './EventOrganizerRegistration.module.css';
import InputField from './InputField';
import Dropdown from './dropdown';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';

const EventOrganizerRegistration = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [logo, setLogo] = useState(null);
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    password: '',
    url: '',
    country: '',
    industry: '',
    orgType: '',
    overview: '',
  });

  const [errors, setErrors] = useState({});

  // Handle field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

  // Update the formData
  setFormData(prevState => ({
    ...prevState,
    [name]: value // Updates the state for the field being changed
  }));

  // Validate the field and update the errors
  setErrors(prevErrors => {
    const newErrors = { ...prevErrors };

    // Validate the field and remove error if valid
    const errorMessage = validateField(name, value);
    if (errorMessage) {
      newErrors[name] = errorMessage; // Add error if invalid
    } else {
      delete newErrors[name]; // Remove error if valid
    }

    return newErrors;
  });
  };
  const validateField = (name, value) => {
    switch (name) {
      case 'orgName':
        return value ? null : 'Organization Name is required';
      case 'email':
        return value ? null : 'Email address is required';
      case 'password':
        return value ? null : 'Password is required';
      case 'url':
        return value ? null : 'Organization URL is required';
      case 'country':
        return value ? null : 'Country is required';
      case 'industry':
        return value ? null : 'Industry is required';
      case 'orgType':
        return value ? null : 'Organization type is required';
      case 'overview':
        return value ? null : 'Overview is required';
      default:
        return null;
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
    }
  };

  const handleSubmit = (e) => {

      e.preventDefault();
    
      // Only check for remaining errors when submitting
      if (Object.keys(errors).length === 0) {
        // If no errors, proceed with registration
        handleSuccessRegistration();
      }
        
    
  
    };
    

  

  const handleSuccessRegistration = () => {
    login("organization")
    navigate('/success');
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
          <div className={styles.stepIndicator}>STEP 01/02</div>
          <div className={styles.stepDescription}>Fill Info.</div>
          <h1 className={styles.formTitle}>Register as an event organizer!</h1>
          <p className={styles.formDescription}>
            Ready to Share Your Opportunities with the World? Let's get started by setting up your organizer profile.
          </p>
          <div className={styles.divider} />
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <InputField 
                  label="Organization Name*" 
                  name="orgName"
                  value={formData.orgName}
                  placeholder="Enter name" 
                  onChange={handleInputChange}
                  error={errors.orgName}
                />
                <InputField 
                  label="Email address*" 
                  name="email"
                  value={formData.email}
                  placeholder="Enter email address" 
                  type="email"
                  onChange={handleInputChange}
                  error={errors.email}
                />
                <InputField 
                  label="Create password*" 
                  name="password"
                  value={formData.password}
                  placeholder="Enter password" 
                  type="password"
                  onChange={handleInputChange}
                  error={errors.password}
                />
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
                <Dropdown 
                  label="Country" 
                  name="country"
                  value={formData.country}
                  placeholder="Select Your Country" 
                  options={["Bahrain", "Saudi Arabia", "Kuwait", "UAE", "Lebanon", "Jordan", "Egypt", "Oman", "Qatar", "Iraq"]}
                  onChange={handleInputChange}
                  error={errors.country}
                />
                <Dropdown 
                  label="Industry" 
                  name="industry"
                  value={formData.industry}
                  placeholder="Select your industry" 
                  options={["Information Technology", "Law & Policy", "Art & Humanities", "Education & Teaching", "Real Estate & Urban Development", "Sports", "Agriculture & Food", "Startups & Innovation", "Logistics & Supply Chain", "Business & Management", "Sustainability & Environment", "Healthcare & Medicine"]} 
                  onChange={handleInputChange}
                  error={errors.industry}
                />
                <Dropdown 
                  label="Type" 
                  name="orgType"
                  value={formData.orgType}
                  placeholder="Select your organization type" 
                  options={["profit", "non profit"]} 
                  onChange={handleInputChange}
                  error={errors.orgType}
                />
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
          <label htmlFor="overview" className={styles.overviewLabel}>Overview*</label>
          <textarea
            id="overview"
            name="overview" // Ensure the name matches the key in formData
            className={styles.overviewTextarea}
            placeholder="Briefly describe your organization"
            value={formData.overview} // Bind the value to state
            onChange={handleInputChange} // Update the state on change
          />
          {errors.overview && <div className={styles.errorMessage}>{errors.overview}</div>}
          <button type="submit" className={styles.registerButton}>
            Register Account
          </button>
        </form>
      </div>
    </main>
  );
};

export default EventOrganizerRegistration;
