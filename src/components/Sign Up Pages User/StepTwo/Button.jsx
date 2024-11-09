import React from 'react';
import styles from './Button.module.css';

function Button({ children, type = 'button', className, ...props }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;