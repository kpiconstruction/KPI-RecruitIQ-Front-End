import React from 'react';
import recruitLogo from '../assets/recruitiq-logo.png';
import kpiLogo from '../assets/kpi-logo.png';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <header className="flex justify-between items-center p-4">
        <img src={kpiLogo} alt="KPI Logo" className="h-12" />
        <img src={recruitLogo} alt="RecruitIQ Logo" className="h-12" />
      </header>
      <div className="hero-content text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Connecting Talent with KPI Construction Services</h1>
        <button className="explore-btn">Explore Careers</button>
      </div>
    </div>
  );
}

export default Hero;
