import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <Metrics />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
