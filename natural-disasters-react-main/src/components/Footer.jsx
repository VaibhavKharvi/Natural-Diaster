import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <svg width="30" height="35" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0C8.06 0 0 8.06 0 18C0 31.5 18 42 18 42C18 42 36 31.5 36 18C36 8.06 27.94 0 18 0Z" fill="#2d6a4f"/>
                <path d="M18 6L9 10V18C9 23.1 13.1 27.9 18 29C22.9 27.9 27 23.1 27 18V10L18 6Z" fill="#52b788"/>
                <path d="M18 8L11 11.5V18C11 22.2 14.1 26.2 18 27.2C21.9 26.2 25 22.2 25 18V11.5L18 8Z" fill="#a8e6cf"/>
                <path d="M18 12L12.5 21H23.5L18 12Z" fill="white"/>
                <rect x="17.2" y="15.5" width="1.6" height="3.5" rx="0.8" fill="#1a3c2e"/>
                <circle cx="18" cy="20.2" r="0.9" fill="#1a3c2e"/>
              </svg>
              <h3><span style={{color:'#fff'}}>Disaster</span><span style={{color:'#52b788'}}>Ready</span></h3>
            </Link>
          </div>
          <p>Your trusted source for natural disaster preparedness information.</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/disasters">Disasters</a></li>
              <li><a href="/preparedness">Preparedness</a></li>
              <li><a href="/quiz">Quiz</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://www.fema.gov" target="_blank" rel="noopener noreferrer">FEMA</a></li>
              <li><a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">Red Cross</a></li>
              <li><a href="https://www.weather.gov" target="_blank" rel="noopener noreferrer">NOAA</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Natural Disasters Preparedness Guide. All rights reserved.</p>
        <p>Information sources: FEMA, Red Cross, NOAA</p>
      </div>
    </div>
  </footer>
);

export default Footer;
