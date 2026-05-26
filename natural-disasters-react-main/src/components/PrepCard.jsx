import React from 'react';

const PrepCard = ({ title, description, checklistItems }) => (
  <div className="prep-card card">
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-text">{description}</p>}
      {checklistItems && (
        <ul className="checklist">
          {checklistItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  </div>
);

export default PrepCard;
