import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePage';


function HomeFeature() {
    return (
        <Routes>
            <Route path="/" element={<HomePages />} />
        </Routes>
    );
}

export default HomeFeature;