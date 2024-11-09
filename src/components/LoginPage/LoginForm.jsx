import React from 'react';
import styles from './LoginForm.module.css';
import InputField from './InputField';
import RememberMe from './RememberMe';
import HeaderLoggedOut from '../HeaderLoggedOut/HeaderLoggedOut';


const LoginForm = () => {
  return (
    <div>
        <HeaderLoggedOut/>
    <form className={styles.loginContainer}>
      <InputField
        label="Email address*"
        type="email"
        placeholder="Example@Something.com"
      />
      <InputField
        label="Password *"
        type="password"
        placeholder="Type password"
      />
      <div className={styles.rememberForgotWrapper}>
        <RememberMe />
        <button type="button" className={styles.forgotPassword}>
          Forgot password?
        </button>
      </div>
      <button type="submit" className={styles.loginButton}>
        Login
      </button>
      <p className={styles.signUpPrompt}>
        Don't have an account?{' '}
        <a href="#signup" className={styles.signUpLink}>
          Sign Up
        </a>
      </p>
    </form>
    </div>
  );
};

export default LoginForm;