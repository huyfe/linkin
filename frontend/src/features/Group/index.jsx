import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DetailGroupComponent from './components/DetailGroupComponent';
import HomeGroupComponent from './components/HomeGroupComponent';

function GroupFeature() {
    return (
        <Routes>
            <Route path="/groups/" element={<HomeGroupComponent />} />
            <Route path="/groups/*" element={<DetailGroupComponent />} />
        </Routes>
    )
}

export default GroupFeature;
