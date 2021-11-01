import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Groups from '../Groups';
import HomePages from './pages/HomePage';


function HomeFeature() {
    return (
        <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/groups" element={<Groups />} />
        </Routes>
    );
}

export default HomeFeature;