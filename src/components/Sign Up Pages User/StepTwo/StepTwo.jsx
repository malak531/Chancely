import React, { useState } from 'react';
import styles from './StepTwo.module.css';
import FormStep from './FormStep';
import InputField from './InputField';
import PasswordField from './PasswordField';
import PasswordConstraints from './PasswordConstraints';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function StepTwo() {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
  });

  // State for error messages
  const [error, setError] = useState('');
  const [message, setMessage] = useState("");
  // Using useNavigate for programmatic navigation
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.trim(), // Trim the input values to remove leading/trailing spaces
    });
  };

  // Validate form
  const validateForm = () => {
    const { firstName,lastName, email, password } = formData;

    // Check if fields are filled
    if (!firstName||!lastName || !email || !password) {
      setError('Please fill out all fields.');
      return false;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    // Clear error if validation passes
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault(); // Prevent form default submission
    if (validateForm()) {
      try {
        console.log(formData);
        const response = await fetch("/api/userAccount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
   
        if (response.ok) {
          const result = await response.json();
          setMessage(`Opportunity "${result.email}" has been created successfully!`);
          navigate('/Step3'); // Navigate after successful submission
        } else {
          setMessage("Failed to create the account. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("An error occurred while creating the account.");
      } // Navigate to Step3 if validation passes
    }
  };

  return (
    <main className={styles.registrationContainer}>
      <div className={styles.formWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/983b8e221d1e97878dac37b1bf0fd7fcadbd2091611db8ef2524c6567a3debaf?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a"
          alt=""
          className={styles.backgroundImage}
        />
        <section className={styles.formContent}>
          <FormStep step="01" totalSteps="03" description="Fill Info." />
          <h1 className={styles.formTitle}>Register as a User!</h1>
          <p className={styles.formDescription}>
            Tell us a bit about yourself so we can personalize your experience.
          </p>
          <hr className={styles.divider} />

          {/* Display error message if any */}
          {error && <p className={styles.errorMessage}>{error}</p>}

          <form className={styles.registrationForm} onSubmit={handleSubmit}>
            <InputField
              label="First Name*"
              type="text"
              placeholder="Enter name"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <InputField
              label="Last Name*"
              type="text"
              placeholder="Enter name"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <InputField
              label="Email address*"
              type="email"
              placeholder="Enter email address"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <PasswordField
              label="Create password*"
              placeholder="Enter password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <PasswordConstraints />

            <Button type="submit" className={styles.registerButton}>
              Register Account
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default StepTwo;
