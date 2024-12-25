import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import CalendarView from './components/CalendarView';
import Notifications from './components/Notifications';
import Login from './components/Login';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <header className="app-header">
                    <h1>Communication Tracking Calendar</h1>
                </header>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/user" element={<UserDashboard />} />
                    <Route path="/calendar" element={<CalendarView />} />
                    <Route path="/notifications" element={<Notifications />} />
                </Routes>
                <footer className="app-footer">
                    <p>Efficient communication tracking for professional relationships.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
