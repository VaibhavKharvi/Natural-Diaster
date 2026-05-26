import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="feature-card card">
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default FeatureCard;
