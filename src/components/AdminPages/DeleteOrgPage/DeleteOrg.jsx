import React from 'react';
import styles from './DeleteOrg.module.css';
import AdminHeader from '../../AdminHeader/AdminHEader';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

function DeleteOrg() {
  // Retrieve the 'id' from the URL params using useParams hook
  const { id } = useParams();

  // Sample data representing organizations (in a real scenario, this could come from an API)
  let info = [
    {
      id: 1,
      description: "Saudi Aramco, officially the Saudi Arabian Oil Company or simply Aramco, is a majority state-owned petroleum and natural gas company that is the national oil company of Saudi Arabia. As of 2024, it is the fourth-largest company in the world by revenue and is headquartered in Dhahran.",
      image: "/Images/aramco.png",
      companyName: "Aramco",
      link: "https://www.aramco.com/",
      location: "Saudi Arabia",
      size: "100k",
      type: "Petroleum",
      events: 60,
    },
    {
      id: 2,
      description: "From making cars and planes more fuel-efficient, to helping conserve the world’s water supply and enabling colorful smartphone cases, we find solutions to the challenges of today to help our customers achieve their ambitions and build a better tomorrow.",
      image: "/Images/sabic.png",
      companyName: "Sabic",
      link: "https://www.sabic.com/en",
      location: "Saudi Arabia",
      size: "70k",
      type: "Petroleum",
      events: 40,
    },
  ];

  // Find the organization that matches the 'id' parameter from the URL
  const event = info.find(event => event.id === parseInt(id));

  // Destructure the details of the organization from the found event
  let { description, image, companyName, link, location, size, type, events } = event;

  // useNavigate hook to navigate programmatically
  let navigate = useNavigate();

  // Function to handle the delete action (navigates back to BrowseOpportunities page)
  const handleDelete = () => {
    navigate('/BrowseOpportunities');
  };

  return (
    <div className={styles.deleteOrganizationAdmin}>
      <header className={styles.head}>
        <AdminHeader />
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.deleteOrganization}>Delete Organization</h1>

        {/* Organization Details Section */}
        <section className={styles.organizationDetails}>
          <div className={styles.orgImageContainer}>
            {/* Displaying the organization's image as background */}
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
          </div>
          <div className={styles.overview}>
            {/* Displaying the description in a disabled textarea */}
            <textarea
              className={styles.overviewText}
              placeholder={description}
              disabled
            ></textarea>
          </div>
        </section>

        {/* Organization Info Section */}
        <section className={styles.organizationInfo}>
          <div className={styles.infoField}>
            <label>Organization Name</label>
            {/* Displaying organization name in a disabled input field */}
            <input type="text" placeholder={companyName} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Website</label>
            {/* Displaying organization website in a disabled input field */}
            <input type="text" placeholder={link} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Location</label>
            {/* Displaying organization location in a disabled input field */}
            <input type="text" placeholder={location} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Size</label>
            {/* Displaying organization size in a disabled input field */}
            <input type="text" placeholder={size} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Type</label>
            {/* Displaying organization type in a disabled input field */}
            <input type="text" placeholder={type} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Total Events</label>
            {/* Displaying total events in a disabled input field */}
            <input type="text" placeholder={events} disabled />
          </div>
        </section>

        {/* Delete button to initiate deletion */}
        <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
      </main>
    </div>
  );
}

export default DeleteOrg;
