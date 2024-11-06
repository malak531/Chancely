import React from 'react';
import './OpportunityHomePage.css';

const OpportunityHomePage = () => {
  return (
    <article className="web-summit-card">
      <div className="image-wrapper">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dcb55677e48d0699869861eb52c43ecc0f67505f072c86df146af707e1a2ec1?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Web Summit Qatar event" className="card-image" />
        {/* <div className="popular-tag">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4d179dc4aa977e302e2de9b857dafa4fc14bc5e55e7e5b1d4771a95b3db8bf?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className="popular-icon" />
          <span className="popular-text">Popular</span>
        </div> */}
      </div>
      <h2 className="card-title">Web Summit Qatar</h2>
      <p className="card-date">February 23-26, 2025</p>
      <p className="card-location">Doha, Qatar</p>
      <a href="#" className="view-details">
        View Details
        <span className="visually-hidden"> about Web Summit Qatar</span>
      </a>
    </article>
  );
};

export default OpportunityHomePage;