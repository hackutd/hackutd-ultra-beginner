import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function LoginPage() {
    const { user, login } = useAuth(); // Use 'user' instead of 'userLoggedIn'
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            // Check if a user is logged in
            navigate('/home'); // Redirect to home if logged in
        }
    }, [user, navigate]); // 'user' state triggers navigation to /home

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/home'); // Ensure you navigate to '/home' after login
        } catch (error) {
            setError('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-pastelblue">
            <form onSubmit={handleSubmit} className="rounded bg-white p-6 shadow-md">
                <h2 className="text-lg font-bold">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full border p-2"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full border p-2"
                    required
                />
                <button type="submit" className="mt-4 w-full bg-blue-500 p-2 text-white">
                    Login
                </button>
                <p className="mt-2">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
