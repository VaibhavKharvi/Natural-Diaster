import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <div className="hero-text">
        <h1>Prepare for Natural Disasters</h1>
        <p>Stay informed and ready with our comprehensive guide to natural disaster preparedness</p>
        <div className="hero-buttons">
          <Link to="/preparedness" className="btn btn-accent">Get Started</Link>
          <Link to="/disasters" className="btn btn-outline">Learn More</Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
