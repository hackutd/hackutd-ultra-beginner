import React from 'react';
import { PiBellSimpleRinging } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* Main navbar container */}
            <div className="mx-auto flex flex-row items-center justify-between px-20 py-4 bg-pastelblue">
                {/* TITLE */}
                <Link to="/home" className="poppins-bold text-3xl text-darkgreen hover:text-pastelgreen transition duration-300">Ripple & Refresh</Link>
                
                {/* PAGES */}
                <div className="poppins-semibold flex gap-8 py-2 text-2xl">
                    <Link to="/map" className="text-darkblue hover:text-pastelgreen transition duration-300">
                        map
                    </Link>
                    <Link to="/rsvp" className="text-darkblue hover:text-pastelgreen transition duration-300">
                        rsvp
                    </Link>
                    <Link to="/activity" className="text-darkblue hover:text-pastelgreen transition duration-300">
                        activity
                    </Link>
                </div>

                {/* ICONS */}
                <div className="flex gap-12 py-2 text-darkgreen">
                    {/* <Link to="/notifications" className="hover:text-pastelgreen transition duration-300">
                        <PiBellSimpleRinging size={'2rem'} />
                    </Link>
                    <Link to="/account" className="hover:text-pastelgreen transition duration-300">
                        <VscAccount size={'2rem'} />
                    </Link> */ }
                </div>
            </div>
            {/* Horizontal line separator */}
            <hr className="w-full flex-row border-t-2 border-pastelgreen border-opacity-50"></hr>
        </div>
    );
}

export default Navbar;
