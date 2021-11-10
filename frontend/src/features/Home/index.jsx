import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import linkApi from '../../api/linkApi';

function HomeFeature() {
    // useEffect(() => {
    //     const fetchLink = async () => {
    //         const linkList = await linkApi.getAll();
    //         console.log(linkList);
    //     }
    //     fetchLink();
    // }, []);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default HomeFeature;