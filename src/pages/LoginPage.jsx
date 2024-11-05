import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function LoginPage() {
    const { userLoggedIn, login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (userLoggedIn) {
            navigate('/home'); // Redirect to home if already logged in
        }
    }, [userLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/home'); // Redirect to home after login
        } catch (error) {
            setError('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-pastelblue">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border p-2 mt-2 w-full"
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="border p-2 mt-2 w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 mt-4 w-full">Login</button>
                <p className="mt-2">
                    Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
