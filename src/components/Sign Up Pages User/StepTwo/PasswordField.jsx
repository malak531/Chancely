import React, { useState } from 'react';
import styles from './PasswordField.module.css';

function PasswordField({ label, placeholder, id, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.passwordContainer}>
      <label htmlFor={id} className={styles.passwordLabel}>{label}</label>
      <div className={styles.passwordWrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          placeholder={placeholder}
          className={styles.passwordInput}
          onChange={onChange}
          required
        />
        <button
          type="button"
          className={styles.showPasswordButton}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}

export default PasswordField;