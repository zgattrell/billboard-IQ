import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A simple, streamlined process designed to maximize your revenue with minimal effort
          </p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Easy Partner Onboarding</h3>
              <p>
                We send you a form to collect your company information and any graphics. 
                We then create a custom information sheet with your branding that you can 
                send directly to your customers.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Custom Advertiser Onboarding</h3>
              <p>
                Our custom information sheet includes a unique web link that allows advertisers 
                to schedule a call with our marketing experts. This ensures we know who to pay 
                for each referral.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Create Marketing Campaign</h3>
              <p>
                Our expert marketing team works directly with your advertiser to create a 
                targeted retargeting campaign designed to reach their ideal customers across 
                multiple digital channels.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Get Paid</h3>
              <p>
                Once the campaign is running, we send you <strong>50% of gross profits</strong>. 
                Track your earnings and campaign performance through our dashboard. 
                No capital investment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
