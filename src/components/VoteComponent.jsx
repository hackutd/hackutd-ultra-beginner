import React, { useEffect, useState } from 'react';
import { getFirestore, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/authContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function VoteComponent() {
    const db = getFirestore();
    const [votes, setVotes] = useState({ activity1: 0, activity2: 0, activity3: 0 });
    const [userVote, setUserVote] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchVotes = async () => {
            const docRef = doc(db, 'votes', 'picnicActivities');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setVotes(docSnap.data());
            } else {
                await setDoc(docRef, { activity1: 0, activity2: 0, activity3: 0 });
            }
        };

        const fetchUserVote = async () => {
            if (user) {
                const userVoteRef = doc(db, 'userVotes', user.uid);
                const userVoteSnap = await getDoc(userVoteRef);
                if (userVoteSnap.exists()) {
                    setUserVote(userVoteSnap.data().vote);
                }
            }
        };

        fetchVotes();
        fetchUserVote();
    }, [user]);

    const handleVote = async (activity) => {
        if (!user || userVote === activity) return;

        const docRef = doc(db, 'votes', 'picnicActivities');
        const userVoteRef = doc(db, 'userVotes', user.uid);

        if (userVote) {
            await updateDoc(docRef, { [userVote]: votes[userVote] - 1 });
        }

        await updateDoc(docRef, { [activity]: votes[activity] + 1 });
        await setDoc(userVoteRef, { vote: activity });
        
        setUserVote(activity);
        setVotes((prevVotes) => ({
            ...prevVotes,
            [userVote]: userVote && userVote !== activity ? prevVotes[userVote] - 1 : prevVotes[userVote],
            [activity]: prevVotes[activity] + 1,
        }));
    };

    const data = {
        labels: ['Activity 1', 'Activity 2', 'Activity 3'],
        datasets: [
            {
                label: 'Votes',
                data: [votes.activity1, votes.activity2, votes.activity3],
                backgroundColor: ['rgba(75,192,192,0.4)', 'rgba(153,102,255,0.4)', 'rgba(255,159,64,0.4)'],
                borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Vote for an Activity</h2>
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => handleVote('activity1')}
                    disabled={!user}
                    className={`py-2 px-4 rounded-md font-semibold transition duration-200 transform ${
                        userVote === 'activity1' ? 'bg-pastelblue text-white' : 'bg-pastelgreen text-darkgreen hover:bg-darkgreen hover:text-white'
                    } ${!user ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                    Activity 1
                </button>
                <button
                    onClick={() => handleVote('activity2')}
                    disabled={!user}
                    className={`py-2 px-4 rounded-md font-semibold transition duration-200 transform ${
                        userVote === 'activity2' ? 'bg-pastelblue text-white' : 'bg-pastelgreen text-darkgreen hover:bg-darkgreen hover:text-white'
                    } ${!user ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                    Activity 2
                </button>
                <button
                    onClick={() => handleVote('activity3')}
                    disabled={!user}
                    className={`py-2 px-4 rounded-md font-semibold transition duration-200 transform ${
                        userVote === 'activity3' ? 'bg-pastelblue text-white' : 'bg-pastelgreen text-darkgreen hover:bg-darkgreen hover:text-white'
                    } ${!user ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                    Activity 3
                </button>
            </div>
            <Bar data={data} />
            {userVote && <p className="mt-2 text-darkblue">You have voted for {userVote.replace('activity', 'Activity ')}.</p>}
        </div>
    );
}

export default VoteComponent;
