import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import FeaturedItem from './components/FeaturedItem';
import Dashboard from './components/Dashboard';
import ActivityPage from './pages/ActivityPage';
import RSVPPage from './pages/RSVPPage';
import MapPage from './pages/MapPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Home route displaying Navbar, FeaturedItem, and Dashboard */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <FeaturedItem />
                            <Dashboard />
                        </>
                    } 
                />
                {/* Browse route displaying Navbar and specific page */}
                <Route path="/map" element={<MapPage />} />
                <Route path="/rsvp" element={<RSVPPage />} />
                <Route path="/activity" element={<ActivityPage />} />
            </Routes>
        </Router>
    );
}

export default App;