import React from 'react'; // Importing React
import './OpportunityHomePage.css'; // Importing CSS for styling the component

const OpportunityHomePage = () => {
  return (
    <article className="web-summit-card"> {/* Main card container */}
      <div className="image-wrapper"> {/* Wrapper for the event image */}
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dcb55677e48d0699869861eb52c43ecc0f67505f072c86df146af707e1a2ec1?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" 
          alt="Web Summit Qatar event" 
          className="card-image" 
        /> 
      </div>
      <h2 className="card-title">Web Summit Qatar</h2> {/* Event title */}
      <p className="card-date">February 23-26, 2025</p> {/* Event date */}
      <p className="card-location">Doha, Qatar</p> {/* Event location */}
      <a href="#" className="view-details"> {/* Link to view more details */}
        View Details
        <span className="visually-hidden"> about Web Summit Qatar</span> {/* Visually hidden text for accessibility */}
      </a>
    </article>
  );
};

export default OpportunityHomePage; // Exporting the OpportunityHomePage component
