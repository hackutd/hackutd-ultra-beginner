import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pastelblue">
      <h1 className="text-5xl font-bold text-darkgreen mb-8">Welcome to Ripple & Refresh</h1>
      <p className="text-lg text-darkblue mb-6">Please log in or register to continue</p>
      <div className="flex space-x-4">
        <Link to="/login" className="px-6 py-3 bg-pastelpink text-darkblue font-semibold rounded-lg shadow-md hover:bg-darkblue hover:text-pastelpink transition duration-300">
          Login
        </Link>
        <Link to="/register" className="px-6 py-3 bg-pastelgreen text-darkblue font-semibold rounded-lg shadow-md hover:bg-darkblue hover:text-pastelgreen transition duration-300">
          Register
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
