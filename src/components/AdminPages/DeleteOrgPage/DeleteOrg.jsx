import React from 'react';
import styles from './DeleteOrg.module.css';
import AdminHeader from '../../AdminHeader/AdminHEader';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

function DeleteOrg() {
  const { id } = useParams();
  let info=[{id:1, description:"Saudi Aramco, officially the Saudi Arabian Oil Company or simply Aramco, is a majority state-owned petroleum and natural gas company that is the national oil company of Saudi Arabia. As of 2024, it is the fourth-largest company in the world by revenue and is headquartered in Dhahran.",
    image:"/Images/aramco.png",
  companyName: "Aramco",
link: "https://www.aramco.com/",
location: "Saudi Arabia",
size: "100k",
type: "Petroleum",
events: 60},{id:2, description:"From making cars and planes more fuel-efficient, to helping conserve the world’s water supply and enabling colorful smartphone cases, we find solutions to the challenges of today to help our customers achieve their ambitions and build a better tomorrow.",
  image:"/Images/sabic.png",
companyName: "Sabic",
link: "https://www.sabic.com/en",
location: "Saudi Arabia",
size: "70k",
type: "Petroleum",
events: 40}];

const event = info.find(event => event.id === parseInt(id));
let description = event.description;
let image = event.image;
let companyName = event.companyName;
let link = event.link;
let location = event.location;
let type = event.type;
let size = event.size;
let events = event.events;
let navigate = useNavigate();
const handleDelete =()=>{
  navigate('/BrowseOpportunities');

}


  return (
    <div className={styles.deleteOrganizationAdmin}>
      <header className={styles.head}>
      <AdminHeader/>
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.deleteOrganization}>Delete Organization</h1>
        <section className={styles.organizationDetails}>
          <div className={styles.orgImageContainer} >
            <div className={styles.image} style={{ backgroundImage:`url(${image})`}} >
            </div>
    </div>
          <div className={styles.overview}>
            <textarea
              className={styles.overviewText}
              placeholder={description}
              disabled
            ></textarea>
          </div>
        </section>
        <section className={styles.organizationInfo}>
          <div className={styles.infoField}>
            <label>Organization Name</label>
            <input type="text" placeholder={companyName} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Website</label>
            <input type="text" placeholder={link} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Location</label>
            <input type="text" placeholder={location} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Size</label>
            <input type="text" placeholder={size} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Organization Type</label>
            <input type="text" placeholder={type} disabled />
          </div>
          <div className={styles.infoField}>
            <label>Total Events</label>
            <input type="text" placeholder={events} disabled />
          </div>
        </section>
        <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
      </main>
    </div>
  );
}

export default DeleteOrg;
