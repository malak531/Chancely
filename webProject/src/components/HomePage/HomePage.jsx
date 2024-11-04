import React from 'react';
import styles from './HomePage.module.css';
import WindowFrame from './WindowFrame';

function HomePage() {
  return (
    <main className={styles.homepageNotLogged}>
      <WindowFrame />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1089549a984d618561231d2b377ddbeac72cf5c4abaf2922882efb3db82cc686?placeholderIfAbsent=true&apiKey=05d1d044449441c1b326e0ad9c21dcf1" alt="Main content illustration" className={styles.mainImage} />
    </main>
  );
}

export default HomePage;