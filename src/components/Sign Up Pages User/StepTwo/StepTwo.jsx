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
    name: '',
    email: '',
    password: '',
  });

  // State for error messages
  const [error, setError] = useState('');

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
    const { name, email, password } = formData;

    // Check if fields are filled
    if (!name || !email || !password) {
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
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default submission
    if (validateForm()) {
      navigate('/Step3'); // Navigate to Step3 if validation passes
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
              label="Your Name*"
              type="text"
              placeholder="Enter name"
              id="name"
              value={formData.name}
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
