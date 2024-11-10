import React from 'react';
import styles from './LoginForm.module.css';

const RememberMe = () => {
  return (
    <div className={styles.rememberMeWrapper}>
      
      <input
        type="checkbox"
        id="rememberMe"
        className={styles.remember}
        aria-label="Remember me" 
      />
      <label htmlFor="rememberMe" className={styles.rememberMeText}>
        Remember me
      </label>
    </div>
  );
};

export default RememberMe;