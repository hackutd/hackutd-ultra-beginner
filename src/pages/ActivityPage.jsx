// ActivityPage.jsx
import React from 'react';
import VoteComponent from '../components/VoteComponent';
import WeatherComponent from '../components/WeatherComponent';
import Navbar from '../components/Navbar';

function ActivityPage() {
    return (
        <div>
            <Navbar />
            <div className="relative my-12 flex flex-col items-center">
                {/* TITLE */}
                <h1 className="poppins-bold text-2xl">Activity Voting & Weather</h1>
                <hr className="mb-4 mt-2 w-1/3 border-black" />

                {/* Glow Effects */}
                <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-pastelgreen opacity-50 blur-lg"></div>
                <div className="absolute bottom-20 right-20 h-40 w-40 animate-pulse rounded-full bg-pastelblue opacity-50 blur-lg"></div>

                {/* Center Card for Vote and Weather */}
                <div className="relative z-10 bg-pastelblue shadow-lg rounded-lg p-6 w-full max-w-2xl flex flex-col gap-6">
                    <WeatherComponent />
                    <VoteComponent />
                </div>
            </div>
        </div>
    );
}

export default ActivityPage;
