import React from 'react';
import styles from './LoginForm.module.css';

const RememberMe = () => {
  return (
    <div className={styles.rememberMeWrapper}>
      <label htmlFor="rememberMe" className={styles.rememberMeText}>
        Remember me
      </label>
      <input
        type="checkbox"
        id="rememberMe"
        className={styles.remember}
        aria-label="Remember me" 
      />
    </div>
  );
};

export default RememberMe;