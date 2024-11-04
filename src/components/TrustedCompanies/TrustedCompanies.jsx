import React from 'react';
import styles from './TrustedCompanies.module.css';

const companies = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd282d007a454d49138fa2ee1dcb26f93fdb0381832d59aaf695565671cf6789?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1", alt: "Company 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cd2e96fdd3182e4a2fd5c5f2268e437a313670c2893ac1390560530ffd500e9?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1", alt: "Company 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4fbbbdc7eb87875f8d401c495a99a02a8f1dd97ef09a0e89c02539428038d0b?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1", alt: "Company 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/38107801ac9f843cfad73bde205a4fa417426cd36395494f18f6d0e92b628253?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1", alt: "Company 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b08566028c6c13d48adbd59714a0a0c8160cccca71c595ce6bb4271e3603db92?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1", alt: "Company 5" }
];

const TrustedCompanies = () => {
  return (
    <section className={styles.trustedCompanies}>
      <h2 className={styles.title}>Trusted by Leading Companies Across the Middle East</h2>
      <div className={styles.logoContainer}>
        {companies.map((company, index) => (
          <img key={index} src={company.src} alt={company.alt} className={styles.logo} />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;