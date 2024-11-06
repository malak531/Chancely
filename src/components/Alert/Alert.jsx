import React from 'react';
import './Alert.css';

function Alert () {
  return (
    <section className='container'>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ab2b064545ec61c401fc8b58e1d9e36b2680eec109dccfa792bab29c9d1979?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" 
        alt="" 
        className='closeIcon'
      />
      <h2 className='title'>
        To access all features, you need to login first!
      </h2>
      <button className='loginButton'>
        Login
      </button>
      <p className='signupPrompt'>
        Don't have an account?{' '}
        <a href="#signup" className='signupLink'>
          Sign Up
        </a>
      </p>
    </section>
  );
};

export default Alert;