import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function PrivateRoute({ children }) {
    const { user } = useAuth(); // Check if the user is logged in

    // Redirect to LandingPage if not logged in
    if (!user) {
        return <Navigate to="/" />; // Correct redirect for non-logged-in users
    }

    // Otherwise, render the child components
    return children;
}

export default PrivateRoute;
