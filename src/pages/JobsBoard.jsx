import React from 'react';

function JobsBoard() {
  const jobs = [
    {id: 1, title: 'Traffic Controller', location: 'Victoria', entity: 'KPI Melbourne'},
    {id: 2, title: 'Site Supervisor', location: 'Queensland', entity: 'KPI QLD'}
  ];
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map(job => (
        <div key={job.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-bold mb-2">{job.title}</h2>
          <p>{job.location} - {job.entity}</p>
          <button className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">Apply Now</button>
        </div>
      ))}
    </div>
  );
}

export default JobsBoard;
