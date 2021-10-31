import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function HomeFeature() {
    return (

        <Routes>
            <>
                <Route path="/" element={<HomePage />} />
            </>
        </Routes>
    );
}

export default HomeFeature;