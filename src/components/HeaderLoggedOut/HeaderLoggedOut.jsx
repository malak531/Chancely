import React from 'react'; // Importing React
import styles from './HeaderLoggedOut.module.css'; // Importing CSS module for styling
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

const HeaderLoggedOut = () => {
  return (
    <header className={styles.header}> {/* Header section */}
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9163b62f940413608d344ef328f147b6739f79d565eb62aa790ac271175fa94e?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" 
        alt="Logo" 
        className={styles.logo} 
      /> {/* Logo image */}
      <nav className={styles.navigation}> {/* Navigation bar */}
        <Link to="/" className={styles.navLink}>Home</Link> {/* Home link */}
        <Link to="/login" className={styles.navLink}>Browse Opportunities</Link> {/* Browse Opportunities link */}
        <Link to="/about" className={styles.navLink}>About us</Link> {/* About Us link */}
        <Link to="/login" className={styles.signOutButton}>Login/Register</Link> {/* Login/Register link */}
      </nav>
    </header>
  );
};

export default HeaderLoggedOut; // Exporting the HeaderLoggedOut component
