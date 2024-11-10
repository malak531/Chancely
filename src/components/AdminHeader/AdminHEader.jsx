import React from 'react';
import styles from './AdminHeader.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';



const AdminHeader = () => {
  const { login } = useAuth();
  const handleSignOut = () => {
    logout();
    navigate('/BrowseOpportunities');
  };
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9163b62f940413608d344ef328f147b6739f79d565eb62aa790ac271175fa94e?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <Link to="/PendingRequests" className={styles.navLink}>Pending Request</Link>
        <Link to="/CreateEvent" className={styles.navLink}>Create Event</Link>
        <Link to="/BrowseOpportunities" className={styles.navLink}>Browse Opportunities</Link>
        <Link to="/about" className={styles.navLink}>About us</Link>
        <Link to="/Delete" className={styles.navLink}>Delete Organizations</Link>
        <Link to="/Browse" className={styles.navLink}>Browse</Link>
        <Link to = "/" className={styles.signOutButton} onClick={handleSignOut}>Sign out</Link>
    </nav>
    </header>
  );
};

export default AdminHeader;