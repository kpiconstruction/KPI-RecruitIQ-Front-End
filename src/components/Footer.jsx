import React from 'react';
import kpiLogo from '../assets/kpi-logo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto flex items-center justify-between px-4 text-sm">
        <span>© 2025 KPI Construction Services | RecruitIQ Portal</span>
        <img src={kpiLogo} alt="KPI Construction Services" className="h-8" />
      </div>
    </footer>
  );
}

export default Footer;
