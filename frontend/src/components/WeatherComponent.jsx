import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';

function WeatherComponent() {
    const db = getFirestore();
    const [weather, setWeather] = useState(null);
    const [date, setDate] = useState('');

    useEffect(() => {
        const fetchDate = async () => {
            const dateDoc = await getDoc(doc(db, 'settings', 'picnicDate'));
            if (dateDoc.exists()) {
                const savedDate = dateDoc.data().date;
                setDate(savedDate);
                fetchWeather(savedDate);
            } else {
                console.log('No date found in Firestore.');
            }
        };
        fetchDate();
    }, [db]);

    const fetchWeather = async (selectedDate) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
                params: {
                    key: '736f7b72cf89470dae4195414240611',
                    q: 'location',
                    dt: selectedDate,
                },
            });
            setWeather(response.data.forecast.forecastday[0].day);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleDateUpdate = async () => {
        try {
            await updateDoc(doc(db, 'settings', 'picnicDate'), { date });
            fetchWeather(date);
            console.log('Date updated successfully in Firestore.');
        } catch (error) {
            console.error('Error updating date:', error);
        }
    };

    return (
        <div className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="mb-2 text-lg font-bold">Weather Forecast</h2>
            <label className="mb-2 block">
                We are planning on:
                <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    className="mb-3 mt-1 w-full rounded border p-2"
                />
            </label>
            <button
                onClick={handleDateUpdate}
                className="mb-4 transform rounded-md bg-pastelblue px-4 py-2 font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-darkblue"
            >
                Update Date
            </button>
            {weather && (
                <div>
                    <p>Temperature: {weather.avgtemp_f}°F</p>
                    <p>Condition: {weather.condition.text}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherComponent;
