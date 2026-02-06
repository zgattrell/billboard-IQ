import React from 'react';
import './Metrics.css';

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Track What Matters</h2>
          <p className="section-subtitle">
            By combining digital marketing and Out-of-Home (Billboard) advertising, 
            we're able to track important metrics in real-time
          </p>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">👆</div>
            <h3>Click Through Rate (CTR)</h3>
            <p>
              Measure how effective your campaigns are at driving user engagement. 
              See exactly how many people are clicking on your digital ads after viewing 
              your billboard advertisements.
            </p>
          </div>

          <div className="metric-card">
            <div className="metric-icon">👁️</div>
            <h3>Cost Per Impression (CPI)</h3>
            <p>
              Understand the cost efficiency of your campaigns. Track how much you're 
              spending for each ad impression across all channels, helping you optimize 
              your marketing budget.
            </p>
          </div>

          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <h3>Cost Per Lead (CPL)</h3>
            <p>
              Calculate the true cost of acquiring new customers. Monitor how much you're 
              spending to generate each qualified lead, enabling better ROI analysis and 
              campaign optimization.
            </p>
          </div>
        </div>

        <div className="metrics-cta">
          <p>
            All metrics are tracked in real-time through our comprehensive dashboard, 
            giving you complete visibility into your campaign performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
