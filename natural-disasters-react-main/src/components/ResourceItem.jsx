import React from 'react';

const ResourceItem = ({ title, description, links }) => (
  <div className="resource-item card">
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      {links && (
        <div className="resource-links">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ResourceItem;
