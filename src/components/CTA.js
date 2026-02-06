import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Increase Your Cashflow with Zero Capital Investment</h2>
          <p className="cta-description">
            Ready to add a new revenue stream to your outdoor advertising business? 
            Get started today with no upfront costs. Our team handles everything, 
            you just earn revenue.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary-large">Get Started Now</a>
            <a href="mailto:info@billboardiq.com" className="btn btn-secondary-large">Contact Us</a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="checkmark">✓</span>
              <span>No Capital Investment Required</span>
            </div>
            <div className="cta-feature">
              <span className="checkmark">✓</span>
              <span>50% Revenue Share</span>
            </div>
            <div className="cta-feature">
              <span className="checkmark">✓</span>
              <span>Expert Team Handles Everything</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
