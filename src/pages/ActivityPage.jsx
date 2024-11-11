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
                <h1 className="">Activity Voting & Weather</h1>
                <hr className="mb-4 mt-2 w-1/3" />

                {/* Center Card for Vote and Weather */}
                <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col gap-6">
                    <WeatherComponent />
                    <VoteComponent />
                </div>
            </div>
        </div>
    );
}

export default ActivityPage;
