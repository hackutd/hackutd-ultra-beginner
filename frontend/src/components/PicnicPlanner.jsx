import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PicnicPlanner() {
    const [item, setItem] = useState('');
    const [picnicItems, setPicnicItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/get-items');
            setPicnicItems(response.data.items);
        } catch (error) {
            console.error('Failed to fetch items:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!item.trim()) return;

        try {
            await axios.post('http://localhost:5000/add-item', { item });
            setItem('');
            fetchItems();
        } catch (error) {
            console.error('Failed to add item:', error);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-green-100 p-4">
            <h1 className="mb-4 text-3xl font-bold">🥪 Picnic Planner</h1>

            <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
                <input
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="What are you bringing?"
                    className="rounded border p-2"
                />
                <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white">
                    Add
                </button>
            </form>

            <ul className="w-full max-w-md rounded bg-white p-4 shadow-md">
                {picnicItems.map((i, idx) => (
                    <li key={idx} className="border-b py-2">
                        {i}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PicnicPlanner;
