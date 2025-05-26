import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Navbar from '../components/Navbar';

const MapPage = () => {
    const mapCenter = { lat: 40.7128, lng: -74.006 };
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCpJWCanaBIY1jqmEdyOSoWQVwaIVADjrw',
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="relative my-12 flex flex-col items-center">
                {/* Navbar */}

                {/* TITLE */}
                <h1 className="poppins-bold flex-row text-2xl">Where we at?</h1>
                <hr className="mb-4 mt-2 w-1/3 border-black" />

                {/* Glow Effects */}
                <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-pastelgreen opacity-50 blur-lg"></div>
                <div className="absolute bottom-20 right-20 h-40 w-40 animate-pulse rounded-full bg-pastelblue opacity-50 blur-lg"></div>

                {/* Map Section */}
                <div className="relative z-10 w-full max-w-lg rounded-lg bg-pastelblue p-6 shadow-lg">
                    <div className="overflow-hidden rounded-lg">
                        <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={mapCenter}>
                            <Marker position={mapCenter} />
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;
