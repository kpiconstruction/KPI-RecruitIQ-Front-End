import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/login', credentials).then(response => {
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
    });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">Login</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="username" placeholder="Username" value={credentials.username} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" />
        <button type="submit" className="bg-neon text-gray-900 font-bold py-2 px-4 rounded hover:bg-neon-light transition">Login</button>
      </form>
    </div>
  );
}

export default Login;
