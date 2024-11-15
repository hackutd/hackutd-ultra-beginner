import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Navbar from '../components/Navbar';

const MapPage = () => {
    const mapCenter = { lat: 40.7128, lng: -74.0060 };
    const mapStyles = {
        height: "400px",
        width: "100%",
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "GOOGLE_API_KEY",
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="relative my-12 flex flex-col items-center">
                {/* Navbar */}

                {/* TITLE */}
                <h1 className="flex-row">Where we at?</h1>
                <hr className="mb-4 mt-2 w-1/3" />

                {/* Map Section */}
                <div className="relative z-10 p-6 w-full max-w-lg">
                    <div className="overflow-hidden">
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={10}
                            center={mapCenter}
                        >
                            <Marker position={mapCenter} />
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;
