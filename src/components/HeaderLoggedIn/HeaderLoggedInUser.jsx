import React from 'react'; // Importing React
import styles from './HeaderLoggedInUser.module.css'; // Importing CSS module for styling
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import { useAuth } from '../AuthContext'; // Importing useAuth hook for authentication context

const HeaderLoggedIn = () => {
  const { login } = useAuth(); // Destructuring login function from useAuth context
  const handleSignOut = () => { 
    logout(); // Function to handle user logout
    navigate('/BrowseOpportunities'); // Redirect to the BrowseOpportunities page after signing out
  };

  return (
    <header className={styles.header}> {/* Header section */}
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9163b62f940413608d344ef328f147b6739f79d565eb62aa790ac271175fa94e?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" 
        alt="Logo" 
        className={styles.logo} 
      /> {/* Logo image */}
      <nav className={styles.navigation}> {/* Navigation bar */}
        <Link to="/" className={styles.navLink}>Home</Link> {/* Home link */}
        <Link to="/BrowseOpportunities" className={styles.navLink}>Browse Opportunities</Link> {/* Browse Opportunities link */}
        <Link to="/about" className={styles.navLink}>About us</Link> {/* About Us link */}
        <Link to="/" className={styles.signOutButton} onClick={handleSignOut}>Sign out</Link> {/* Sign Out link */}
        <Link to="/UserProfile" className={styles.container}> {/* User profile link */}
          <div
            className={styles.container} 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/profile.png)` }} // Dynamically setting profile image background
          ></div>
        </Link> {/* Profile image container */}
      </nav>
    </header>
  );
};

export default HeaderLoggedIn; // Exporting the HeaderLoggedIn component
