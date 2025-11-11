import React from 'react';

function ApplicationForm() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Apply for Job</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
