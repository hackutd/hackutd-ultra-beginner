import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            navigate('/home'); // Redirect to home after registration
        } catch (error) {
            setError('This email is already registered. Please use a different email.');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-pastelblue">
            <div className="w-full rounded-lg bg-white p-8 shadow-lg sm:w-96">
                <h2 className="mb-6 text-2xl font-semibold text-darkgreen">Register</h2>

                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-darkblue">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pastelgreen"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-darkblue"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pastelgreen"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-darkgreen py-2 text-white transition duration-300 hover:bg-darkblue"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-darkblue">
                        Already have an account?{' '}
                        <Link to="/login" className="text-pastelgreen hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
