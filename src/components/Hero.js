import React from 'react';
import './Hero.css';

const Hero = () => {
  const billboardImage = process.env.PUBLIC_URL 
    ? `${process.env.PUBLIC_URL}/billboard-image.png` 
    : '/billboard-image.png';

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-brand">BillboardIQ</span>
            <span className="hero-subtitle">Digital Marketing for Independent Billboard Operators</span>
          </h1>
          <p className="hero-description">
            Our expert marketing team will work with your advertisers to target your clients' ideal customers. 
            No need to learn new technologies or hire new employees. Stay future-proof and add a new revenue stream 
            to your business with <strong>zero cost to you</strong>.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#how-it-works" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img 
              src={billboardImage} 
              alt="Billboard displaying data visualization with growth metrics" 
              className="hero-billboard-image"
              onError={(e) => {
                // Hide image if it fails to load
                e.target.style.display = 'none';
                console.warn('Billboard image not found. Please add billboard-image.jpg to the public/ folder');
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
