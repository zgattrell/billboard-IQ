import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Retargeting Works</h2>
          <p className="section-subtitle">
            Combining digital marketing with Out-of-Home advertising creates powerful results
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card highlight">
            <div className="benefit-stat">86%</div>
            <h3>Interaction Increase</h3>
            <p>
              When a Call-to-Action (CTA) is seen across both Digital Out-of-Home (DOOH) 
              and social ads, interaction rates increase by 86%.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-stat">46%</div>
            <h3>Internet Searches</h3>
            <p>
              Nearly half of adults (46%) perform internet searches after viewing a 
              Digital Out-of-Home advertisement.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-stat">48%</div>
            <h3>Mobile Ad Clicks</h3>
            <p>
              48% of adults click on mobile ads after seeing an Out-of-Home impression, 
              showing the power of cross-channel marketing.
            </p>
          </div>
        </div>

        <div className="targeting-info">
          <h3>Advanced Demographic Targeting</h3>
          <p>
            Our retargeting campaigns allow you to serve digital ads to your target demographics including:
          </p>
          <div className="targeting-tags">
            <span className="tag">Age</span>
            <span className="tag">Income Level</span>
            <span className="tag">Spoken Language</span>
            <span className="tag">Gender</span>
            <span className="tag">Homeownership Status</span>
            <span className="tag">Geographic Location</span>
            <span className="tag">Interests</span>
            <span className="tag">Behavioral Patterns</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
