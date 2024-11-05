import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function PrivateRoute({ children }) {
    const { userLoggedIn } = useAuth();

    // Redirect to LandingPage if not logged in
    if (!userLoggedIn) {
        return <Navigate to="/" />;
    }

    // Otherwise, render the child components
    return children;
}

export default PrivateRoute;
