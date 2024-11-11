import React from 'react';
import { PiBellSimpleRinging } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* Main navbar container */}
            <div className="mx-auto flex flex-row items-center justify-between px-20 py-4">
                {/* TITLE */}
                <Link to="/home" className="">Ripple & Refresh</Link>
                
                {/* PAGES */}
                <div className="">
                    <Link to="/map" className="">
                        map
                    </Link>
                    <Link to="/activity" className="">
                        activity
                    </Link>
                </div>

                {/* ICONS */}
                <div className="flex gap-12 py-2">
                </div>
            </div>
            {/* Horizontal line separator */}
            <hr className="w-full flex-row"></hr>
        </div>
    );
}

export default Navbar;
