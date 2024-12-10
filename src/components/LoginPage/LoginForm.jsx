import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css';
import InputField from './InputField';
import RememberMe from './RememberMe';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginForm = ({ onLoginSuccess }) => {
  // Sample accounts data (can be replaced with actual API calls)
  const [accounts, setAccounts] = useState([]);


  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await fetch('/api/accounts'); // Adjust the API endpoint
        if (response.ok) {
          const data = await response.json();
          setAccounts(data);
        } else {
          console.error('Failed to fetch accounts');
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    }
    fetchAccounts();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const sendEmailToServer = async (email) => {
    try {
      const response = await fetch('/api/login-success', { // Adjust the endpoint as per your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send the email as part of the request body
      });
  
      if (response.ok) {
        console.log('Email sent to server successfully!');
      } else {
        console.error('Failed to send email to server');
      }
    } catch (error) {
      console.error('Error sending email to server:', error);
    }
  };
  
  // Validate login credentials
  const validateLogin = () => {
    if (!email || !password) {
      setError('Please fill in both fields.');
      return false;
    }

    // Check credentials against predefined accounts
    const account = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (!account) {
      setError('Invalid email or password.');
      return false;
    }
    login(account.type); // Log in with the account's role
    sendEmailToServer(email); 
    // Redirect based on role
    if (account.type === 'admin') {
      navigate('/BrowseOpportunities');
    } else if (account.type === 'organization') {
      navigate('/BrowseOpportunities');
    } else {
      navigate('/BrowseOpportunities');
    }
    

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (validateLogin()) {
      setError(''); // Clear error on successful login
    }
  };

  return (
    <div>
      <HeaderLoggedOut />
      <form className={styles.loginContainer} onSubmit={handleSubmit} action ='/login' method ='POST'>
        {/* Input fields */}
        <InputField
          label="Email address*"
          type="email"
          placeholder="Example@Something.com"
          name="email"
          id="emailInput"
          value={email}
          onChange={handleInputChange}
        />
        <InputField
          label="Password *"
          type="password"
          placeholder="Type password"
          name="password"
          id="passwordInput"
          value={password}
          onChange={handleInputChange}
        />

        {/* Display error message */}
        {error && <p className={styles.errorMessage}>{error}</p>}

        

        {/* Submit button */}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>

        {/* Sign Up link */}
        <p className={styles.signUpPrompt}>
          Don't have an account?{' '}
          <Link to="/Step1" className={styles.signUpLink}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
