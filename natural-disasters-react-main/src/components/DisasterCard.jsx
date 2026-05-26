import React from 'react';

const DisasterCard = ({ title, description, imageUrl, onClick }) => (
  <div className="disaster-card card" onClick={onClick}>
    <img src={imageUrl} alt={title} className="card-img" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default DisasterCard;
