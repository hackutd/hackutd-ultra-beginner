import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import Card from './Card';

function Dashboard() {
    const [items, setItems] = useState([]); // Empty array to hold Firebase data

    // Function to fetch invitee data from Firestore
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "invitees"));
            const dataArray = querySnapshot.docs.map(doc => doc.data());
            setItems(dataArray); // Set the state with the data from Firestore
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    // UseEffect to call fetchData when component loads
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="relative my-12 flex flex-col items-center">
            {/* TITLE */}
            <h1 className="flex-row">Who's Invited?</h1>
            <hr className="mb-4 mt-2 w-1/3" />

            {/* Event List Grid */}
            <div className="relative z-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through items and render a Card component for each */}
                {items.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        img={item.img}
                        status={item.status}
                        bringing={item.bringing}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;