import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital marketing solutions designed specifically for independent billboard operators
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Retargeting Campaigns</h3>
            <p>
              Serve digital ads to your target demographics including age, income, spoken language, 
              gender, homeownership status, and more. Reach the right audience at the right time.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🤝</div>
            <h3>Partner Revenue Sharing</h3>
            <p>
              We work with your advertisers to create retargeting campaigns and send you 
              <strong> 50% of gross profits</strong>. Earn revenue with zero capital investment.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Cross-Platform Integration</h3>
            <p>
              Combine digital marketing with Out-of-Home (Billboard) advertising for maximum impact. 
              Track performance across all channels in one place.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>
              Track important metrics including Click Through Rate, Cost Per Impression, and Cost Per Lead. 
              Make data-driven decisions for your campaigns.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Expert Marketing Team</h3>
            <p>
              Our team handles all the technical aspects so you don't have to learn new technologies 
              or hire additional employees.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💰</div>
            <h3>Zero Capital Investment</h3>
            <p>
              Increase your outdoor advertising company's cashflow with no upfront costs. 
              We handle everything, you just earn revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
