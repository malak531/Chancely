import React from 'react';
import styles from './PendingOrganizationDetails.module.css';

const Header = () => {
  return (
    <div className={styles.div}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2493c536794c3176dfc67e33a72ee1891162ff955b722989a2b9afb56c9afff2?apiKey=218bd92b074948a89f9ff4d5fadeb9e2&" alt="Logo" className={styles.img} />
      <div className={styles.div2}>
        <div className={styles.pendingRequests}>Pending Requests</div>
        <div className={styles.createEvent}>Create Event</div>
        <div className={styles.organizations}>Organizations</div>
        <div className={styles.opportunities}>Opportunities</div>
        <div className={styles.signOut}>Sign out</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fbbecafedfa3980bac004b31b08d888a97ccfd6a04db11cc11fb7cc99a38c18?apiKey=218bd92b074948a89f9ff4d5fadeb9e2&" alt="User" className={styles.img2} />
      </div>
    </div>
  );
};

export default Header;