import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import InputField from './InputField';
import RememberMe from './RememberMe';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginForm = ({ onLoginSuccess }) => {
  // Sample accounts data (can be replaced with actual API calls)
  const accounts = {
    admin: { email: 'admin@domain.com', password: 'admin123', role: 'admin' },
    organization: { email: 'org@domain.com', password: 'org123', role: 'organization' },
    user: { email: 'user@domain.com', password: 'user123', role: 'user' },
  };

  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Validate login credentials
  const validateLogin = () => {
    if (!email || !password) {
      setError('Please fill in both fields.');
      return false;
    }

    // Check credentials against predefined accounts
    const account = Object.values(accounts).find(
      (account) => account.email === email && account.password === password
    );

    if (!account) {
      setError('Invalid email or password.');
      return false;
    }
    login(account.role); // Log in with the account's role

    // Redirect based on role
    if (account.role === 'admin') {
      navigate('/BrowseOpportunities');
    } else if (account.role === 'organization') {
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
