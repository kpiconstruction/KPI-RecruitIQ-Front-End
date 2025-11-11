import React from 'react';
import kpiLogo from '../assets/kpi-logo.png';

function Header() {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img src={kpiLogo} alt="KPI Construction Services" className="h-10" />
          <h1 className="text-2xl font-bold text-neon">RecruitIQ</h1>
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-neon">Jobs</a>
          <a href="/login" className="hover:text-neon">Login</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
