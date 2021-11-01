import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function HomeFeature() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default HomeFeature;