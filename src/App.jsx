import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobsBoard from './pages/JobsBoard';
import ApplicationForm from './pages/ApplicationForm';
import Login from './pages/Login';
import Hero from './pages/Hero';

function App() {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path="/" element={<JobsBoard />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
