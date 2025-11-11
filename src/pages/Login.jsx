import React from 'react';

function Login() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Username" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">Login</button>
      </form>
    </div>
  );
}

export default Login;
