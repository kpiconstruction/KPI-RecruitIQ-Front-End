import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApplicationForm() {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`/api/apply/${jobId}`, formData).then(() => alert('Application submitted!'));
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">Apply for Job</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" />
        <input name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" />
        <button type="submit" className="bg-neon text-gray-900 font-bold py-2 px-4 rounded hover:bg-neon-light transition">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
