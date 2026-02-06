import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>BillboardIQ</h3>
            <p>Digital Marketing Services for Independent Billboard Operators</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Retargeting Campaigns</a></li>
                <li><a href="#services">Partner Revenue Sharing</a></li>
                <li><a href="#services">Analytics & Tracking</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#contact">Get Started</a></li>
                <li><a href="mailto:info@billboardiq.com">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@billboardiq.com">info@billboardiq.com</a></li>
                <li>Schedule a Call</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BillboardIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
