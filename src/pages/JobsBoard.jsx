import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobsBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs').then(response => setJobs(response.data));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Featured Roles</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
            <p className="text-gray-400 mb-2">{job.location}</p>
            <p className="text-gray-400 mb-4">{job.entity}</p>
            <a href={`/apply/${job.id}`} className="bg-neon text-gray-900 font-bold py-2 px-4 rounded hover:bg-neon-light transition">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsBoard;
