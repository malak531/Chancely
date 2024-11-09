import React from 'react';
import styles from './TrustedCompanies.module.css';

function TrustedCompanies() {
  return (
    <div className={styles.trustedCompanies}>
      
      <div className={styles.textWrapper}>
        <p className={styles.trustedText}>
          Trusted by Leading Companies Across the Middle East
        </p>
       
      </div>
      <div className={styles.companyLogos}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d7b932ea04e8470e89223608524eb29e780883b944869caa969183f3e9524d?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Company logo" className={styles.logo1} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ae25e8770c2fcd5f704e7ba096a3f334f8cbef6c85a04c604c20c7fd10df12e?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Company logo" className={styles.logo2} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be982e31084730d2da408c7d0dd0096dece0867f05baab0bb6662eeedfd5e305?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Company logo" className={styles.logo3} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/98d40fdecc61ec500ad7859316f4df59c1d5a862af2575f400df459584e1c341?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Company logo" className={styles.logo4} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ee2de5265b19e9d4e6b35e5cdafcd09cfb19296ca170aeea6eebfc4b95d371?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Company logo" className={styles.logo5} />
      </div>
    </div>
  );
}

export default TrustedCompanies;