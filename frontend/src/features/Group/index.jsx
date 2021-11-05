import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomeGroupComponent from './components/HomeGroupComponent';
import DetailGroupPages from './pages/DetailGroupPages';
import ListGroupPages from './pages/ListGroupPages';

function GroupFeature() {
    return (
        <Routes>
            <Route path="/groups" element={<HomeGroupComponent />} />
            <Route path="/groups/*" element={<DetailGroupPages />} />
        </Routes>
    )
}

export default GroupFeature;
