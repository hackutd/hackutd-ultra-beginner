import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../contexts/authContext';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            navigate('/test'); // Redirect to the main page after registration
        } catch (error) {
            setError('This email is already registered. Please use a different email.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-pastelblue">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-2xl font-semibold text-darkgreen mb-6">Register</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-darkblue">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pastelgreen"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-darkblue">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pastelgreen"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="w-full py-2 bg-darkgreen text-white rounded-md hover:bg-darkblue transition duration-300">Register</button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-darkblue">
                        Already have an account?{' '}
                        <Link to="/login" className="text-pastelgreen hover:underline">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
