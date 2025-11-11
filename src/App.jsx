import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobsBoard from './pages/JobsBoard';
import ApplicationForm from './pages/ApplicationForm';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <Hero />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<JobsBoard />} />
            <Route path="/apply/:jobId" element={<ApplicationForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
